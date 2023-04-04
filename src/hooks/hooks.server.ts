import PocketBase from "pocketbase";
import type { Handle } from "@sveltejs/kit";
import { PUBLIC_SERVER } from "$env/static/public";

export const handle = (async ({ event, resolve }) => {
    (event.locals as any).pb = new PocketBase(PUBLIC_SERVER);

    // load the store data from the request cookie string
    (event.locals as any).pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");

    try {
        // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
        (event.locals as any).pb.authStore.isValid &&
            (await (event.locals as any).pb.collection("users").authRefresh());
    } catch (_) {
        // clear the auth store on failed refresh
        (event.locals as any).pb.authStore.clear();
    }

    const response = await resolve(event);

    // send back the default 'pb_auth' cookie to the client with the latest store state
    response.headers.append("set-cookie", (event.locals as any).pb.authStore.exportToCookie());

    return response;
}) satisfies Handle;

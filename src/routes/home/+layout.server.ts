import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load = (event => {
    const locals = event.locals as any;
    if (!locals.pb.authStore.isValid) {
        throw redirect(307, "../");
    }
}) satisfies LayoutServerLoad;

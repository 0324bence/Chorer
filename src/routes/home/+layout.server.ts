import { redirect } from "@sveltejs/kit";
import pb from "$lib/pocketbase";
import type { LayoutServerLoad } from "./$types";

export const load = (({ locals }) => {
    if (pb.authStore.isValid) {
        throw redirect(307, "/login");
    }
}) satisfies LayoutServerLoad;

import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { Actions } from "./$types";

export const load = (event => {
    const locals: any = event.locals;
    if (locals.pb.authStore.isValid) {
        throw redirect(303, "/home");
    }
}) satisfies PageServerLoad;

export const actions = {
    login: async event => {
        const locals: any = event.locals;
        const data = await event.request.formData();
        const username = data.get("username");
        const password = data.get("password");

        try {
            await locals.pb.collection("users").authWithPassword(username, password);
        } catch (err: any) {
            return fail(400, { register: false, ...err.data });
        }
    },
    register: async event => {
        const locals: any = event.locals;
        const data = await event.request.formData();
        const username = data.get("username");
        const password = data.get("password");
        const email = data.get("email");
        try {
            await locals.pb.collection("users").create({
                username,
                password,
                passwordConfirm: password,
                email
            });
        } catch (err: any) {
            return fail(400, { register: true, ...err.data });
        }
    }
} satisfies Actions;

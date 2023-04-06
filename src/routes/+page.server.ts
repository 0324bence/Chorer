import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { Actions } from "./$types";

export const load = (({ locals }) => {
    if (locals.pb.authStore.isValid) {
        throw redirect(303, "/home");
    }
}) satisfies PageServerLoad;

export const actions = {
    login: async ({ locals, request }) => {
        const data = await request.formData();
        const username = data.get("username");
        const password = data.get("password");

        if (!username || !password) {
            return fail(400, { register: false, error: "Missing username or password" });
        }

        try {
            await locals.pb.collection("users").authWithPassword(username.toString(), password.toString());
        } catch (err: any) {
            return fail(400, { register: false, ...err.data });
        }
    },
    register: async ({ locals, request }) => {
        const data = await request.formData();
        const username = data.get("username");
        const password = data.get("password");
        const email = data.get("email");
        if (!username || !password || !email) {
            return fail(400, { register: false, error: "Missing username or password" });
        }

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

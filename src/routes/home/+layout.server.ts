import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

interface Event {
    collectionId: string;
    collectionName: string;
    created: string;
    description: string;
    endTime: string;
    id: string;
    owner: string;
    startTime: string;
    title: string;
    updated: string;
    expand: object;
}

export const load = (async ({ locals }) => {
    //Redirect to login page is user is not logged in
    if (!locals.pb.authStore.isValid) {
        throw redirect(307, "../");
    }

    //Get all events owned by the user
    const records = (await locals.pb.collection("events").getFullList({
        filter: `owner = "${locals.pb.authStore.model?.id}"`
    })) as any[];
    //Serialize the records

    const serializedRecords = records.map<Event>(val => ({ ...val }));

    console.log(serializedRecords);
    return {
        events: serializedRecords
    };
}) satisfies LayoutServerLoad;

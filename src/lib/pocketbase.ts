import PocketBase from "pocketbase";
import { PUBLIC_SERVER } from "$env/static/public";

const pb = new PocketBase(PUBLIC_SERVER);
export default pb;

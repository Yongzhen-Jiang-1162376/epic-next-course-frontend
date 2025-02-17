import { cookies } from "next/headers";


export async function getAuthToken() {
    const cookieStore = await cookies();
    const authtoken = cookieStore.get("jwt")?.value;
    return authtoken;
}
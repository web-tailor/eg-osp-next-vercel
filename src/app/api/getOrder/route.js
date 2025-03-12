import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const guid = searchParams.get("guid");

    if (!guid) {
        return NextResponse.json({ error: "Order GUID is required" }, { status: 400 });
    }

    try {
        const response = await axios.get(`https://shop.api.eventix.io/order/${guid}`, {
            headers: { Accept: "application/json" },
        });

        return NextResponse.json(response.data, { status: 200 });
    } catch (error) {
        console.error("Error fetching order:", error);
        return NextResponse.json({ error: error.message }, { status: error.response?.status || 500 });
    }
}
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
        return Response.json({ error: "Slug is required" }, { status: 400 });
    }

    const url = `https://api.event-go.nl/internal/events/${slug}`;
    const token = process.env.EVENT_API_TOKEN; // Use the secret token

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return Response.json(data); // Return event details
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}
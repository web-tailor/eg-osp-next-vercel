export async function POST(request) {
    const { eventId } = await request.json(); // Read body from request

    if (!eventId) {
        return Response.json({ error: "Event ID is required" }, { status: 400 });
    }

    const url = "https://api.event-go.nl/internal/events/search";
    const token = process.env.EVENT_API_TOKEN; // Keep it secret

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`, // Use the secret token
            },
            body: JSON.stringify({
                filters: [{ field: "id", operator: "=", value: eventId }]
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return Response.json(data); // Return event data
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}
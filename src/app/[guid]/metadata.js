export async function generateMetadata({ params }) {
    const { guid } = params;

    try {
        // Fetch Order Data (server-side)
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getOrder?guid=${guid}`, {
            cache: "no-store",
        });

        if (!response.ok) {
            return { title: "Order Not Found | Event & Go" };
        }

        const data = await response.json();

        // Extract Event Name
        const eventName = data?.tickets?.[0]?.ticket?.event?.name || "Event & Go";

        return {
            title: `${eventName} - Event & Go`,
            description: "Verzekerd van een parkeerplek! Niet ter plaatse afrekenen, maar onbezorgd genieten van het concert.",
        };
    } catch (error) {
        console.error("Metadata Fetch Error:", error);
        return { title: "Event & Go - Error", description: "Something went wrong fetching event details." };
    }
}
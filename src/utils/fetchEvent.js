import { fetchOrder } from "./fetchOrder";

export async function fetchEvent(guid, setOrder, setEventData, setEventDetails, setError, setLoading) {
    setLoading(true);
    setError(false);

    try {

        // 1️⃣ Fetch Order
        const orderData = await fetchOrder(guid);
        if (!orderData) {
            setError(true);
            return;
        }

        setOrder(orderData);

        // 2️⃣ Extract eventId and Fetch Event Data
        const eventId = orderData.tickets?.[0]?.ticket?.event_id;
        if (!eventId) {
            console.error("No event ID found in order data");
            setError(true);
            return;
        }

        const eventResponse = await fetch("/api/searchEvents", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ eventId }),
        });

        if (!eventResponse.ok) throw new Error(`HTTP error! Status: ${eventResponse.status}`);

        const eventData = await eventResponse.json();

        if (!eventData?.data?.length) {
            console.error("No event found for eventId:", eventId);
            setError(true);
            return;
        }

        setEventData(eventData);

        // 3️⃣ Extract Slug and Fetch Event Details
        const slug = eventData?.data?.[0]?.slug;
        if (!slug) {
            console.error("No slug found for eventId:", eventId);
            setError(true);
            return;
        }

        const eventDetailsResponse = await fetch(`/api/getEventDetails?slug=${slug}`);
        if (!eventDetailsResponse.ok) throw new Error(`HTTP error! Status: ${eventDetailsResponse.status}`);

        const eventDetails = await eventDetailsResponse.json();
        setEventDetails(eventDetails);
    } catch (err) {
        console.error("Error fetching event details:", err);
        setError(true);
    } finally {
        setLoading(false);
    }
}
"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Get eventId from URL
import EventList from "@/components/molecules/lists/EventList";
import EventDetails from "@/components/molecules/EventDetails";
import IconLogo from "@/components/atoms/icons/IconLogo";
import NotFound from "@/components/organisms/NotFound";

export default function EventPage() {
    const [eventData, setEventData] = useState(null);
    const [eventDetails, setEventDetails] = useState(null);
    const [error, setError] = useState(false);

    // Get eventId from URL
    const pathname = usePathname();
    const eventId = pathname.split("/")[2]; // Extract eventId from the path

    useEffect(() => {
        if (!eventId) return; // If eventId is missing, do nothing

        async function fetchEventData() {
            try {
                console.log("Fetching event for eventId:", eventId); // ✅ Log eventId

                const res = await fetch("/api/searchEvents", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ eventId }),
                });

                if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

                const data = await res.json();

                console.log("API Response:", data); // ✅ Log full API response

                // Check if API returned data
                if (!data?.data?.length) {
                    console.error("No event found for eventId:", eventId);
                    setError(true);
                    return;
                }

                setEventData(data);

                // Extract slug safely
                const slug = data?.data?.[0]?.slug;
                if (!slug) {
                    console.error("No slug found for eventId:", eventId);
                    setError(true);
                    return;
                }

                fetchEventDetails(slug);
            } catch (error) {
                console.error("Error fetching events:", error);
                setError(true);
            }
        }

        async function fetchEventDetails(slug) {
            try {
                const res = await fetch(`/api/getEventDetails?slug=${slug}`);

                if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

                const details = await res.json();
                setEventDetails(details);
            } catch (error) {
                console.error("Error fetching event details:", error);
                setError(true);
            }
        }

        fetchEventData();
    }, [eventId]);

    // Show 404 page if error occurs
    if (error) {
        return <NotFound />;
    }

    const event = eventData?.data?.[0] || null;

    return (
        <div className="container mx-auto p-6">
            <IconLogo/>
            <h1 className="text-2xl font-bold text-center mb-4">Event Info</h1>

            {/* Render EventList component */}
            {event && <EventList event={event} />}

            {/* Render EventDetails component */}
            {eventDetails && <EventDetails details={eventDetails} />}
        </div>
    );
}
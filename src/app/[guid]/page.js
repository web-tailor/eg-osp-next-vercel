"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Order from "@/components/molecules/Order";
import EventList from "@/components/molecules/lists/EventList";
import EventDetails from "@/components/molecules/EventDetails";
import IconLogo from "@/components/atoms/icons/IconLogo";
import NotFound from "@/components/organisms/NotFound";
import { fetchEvent } from "@/utils/fetchEvent"; // ✅ Import new fetchEvent function

export default function OrderDetailsPage() {
    const { guid } = useParams();
    const [order, setOrder] = useState(null);
    const [eventData, setEventData] = useState(null);
    const [eventDetails, setEventDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // ✅ Fetch event data on mount
    useEffect(() => {
        if (!guid) return;
        fetchEvent(guid, setOrder, setEventData, setEventDetails, setError, setLoading);
    }, [guid]);

    // ✅ Update metadata when eventData is updated
    useEffect(() => {
        if (eventData && eventData.data?.length > 0) {
            const eventName = eventData.data[0].name;
            if (eventName) {
                document.title = `${eventName} | Event & Go`;
            }
        }
    }, [eventData]);

    if (error) {
        return <NotFound />;
    }

    const event = eventData?.data?.[0] || null;

    return (
        <div className="container">
            <IconLogo/>
            <h1 className="text-center text-[126px] font-extrabold leading-none bg-gradient-to-r from-[#1835F5] via-[#CDC5F2] to-[#CDC5F2] bg-clip-text text-transparent">
                Order & Event Info
            </h1>


            {loading && <p>Loading order and event details...</p>}

            {order && <Order order={order}/>}

            {event && <EventList event={event}/>}
            {eventDetails && <EventDetails details={eventDetails}/>}


        </div>
    );
}
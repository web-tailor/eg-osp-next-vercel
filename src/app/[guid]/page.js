"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import PersonalCard from "@/components/molecules/cards/PersonalCard";
import TicketCard from "@/components/molecules/cards/TicketCard";
import EventList from "@/components/molecules/EventList";
import EventDetails from "@/components/molecules/EventDetails";
import NotFound from "@/components/organisms/NotFound";
import { fetchEvent } from "@/utils/fetchEvent";


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
        <div>

            <Header/>

            {event && <Hero event={event}/> }

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-12 mb-4 mb-lg-0">
                            {order && <TicketCard order={order}/>}
                        </div>
                        <div className="col-lg-5 col-12">
                            {order && <PersonalCard order={order}/>}
                        </div>
                    </div>
                </div>
            </section>

            {event && <EventList event={event}/>}
            {eventDetails && <EventDetails details={eventDetails}/>}


        </div>
    );
}
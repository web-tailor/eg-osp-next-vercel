"use client";

import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import { fetchEvent } from "@/utils/fetchEvent";
import LoadingBar from "react-top-loading-bar";
import PageLoader from '@/components/atoms/PageLoader';
import NotFound from "@/components/organisms/NotFound";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import TicketCard from "@/components/molecules/cards/TicketCard";
import PersonalCard from "@/components/molecules/cards/PersonalCard";
import PaymentSummaryCard from '@/components/molecules/cards/PaymentSummaryCard';
import SpotifyPlayer from '@/components/molecules/SpotifyPlayer';
import CountDownCard from '@/components/molecules/cards/CountDownCard';
import TextBlockTextCard from '@/components/molecules/cards/TextBlockTextCard';
import TextBlockImageCard from '@/components/molecules/cards/TextBlockImageCard';
import Footer from '@/components/organisms/Footer';

export default function OrderDetailsPage() {
    const { guid } = useParams();
    const [order, setOrder] = useState(null);
    const [eventData, setEventData] = useState(null);
    const [eventDetails, setEventDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);
    const loadingBarRef = useRef(null);

    // Fetch event data on mount
    useEffect(() => {
        if (!guid) return;
        loadingBarRef.current?.continuousStart();

        fetchEvent(guid, setOrder, setEventData, setEventDetails, setError, setLoading).then(() => {
            loadingBarRef.current?.complete();
        });
    }, [guid]);

    // Set timer for animation when page is loaded
    useEffect(() => {
        if (!loading) {
            const timer = setTimeout(() => setContentVisible(true), 100);
            return () => clearTimeout(timer);
        }
    }, [loading]);

    // Update metadata when eventData is updated
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

            <LoadingBar ref={loadingBarRef} color="#1835F5" height={4}/>

            {loading ? (
                <PageLoader/>
            ) : (
                <div
                    className={`transition-opacity duration-700 ease-in-out ${
                        contentVisible ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Header/>

                    {order && <Hero order={order}/>}

                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-12 mb-lg lg:mb-0">
                                    {order && <TicketCard order={order}/>}
                                </div>
                                <div className="col-lg-5 col-12">
                                    {order && <PersonalCard order={order}/>}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 col-12 mb-lg lg:mb-0">
                                    {order && <PaymentSummaryCard order={order}/>}
                                </div>
                                <div className="col-lg-7 col-12">
                                    {event && <CountDownCard event={event}/>}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-12 mb-lg lg:mb-0">
                                    <TextBlockTextCard event={event}/>
                                </div>
                                <div className="col-lg-5 col-12">
                                    <TextBlockImageCard event={event}/>
                                </div>
                            </div>
                        </div>
                    </section>

                    {event?.spotify && (
                        <section>
                            <div className="container">
                                <SpotifyPlayer spotifyUri={event.spotify}/>
                            </div>
                        </section>
                    )}

                    {/* {event && <EventList event={event}/>}
              {eventDetails && <EventDetails details={eventDetails}/>}*/}

                    <Footer/>
                </div>
            )}


        </div>
    );
}
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import Hero from "@/components/organisms/Hero";
import Header from "@/components/organisms/Header";
import TicketCard from "@/components/molecules/cards/TicketCard";
import PersonalCard from "@/components/molecules/cards/PersonalCard";
import PaymentSummaryCard from "@/components/molecules/cards/PaymentSummaryCard";
import CountDownCard from "@/components/molecules/cards/CountDownCard";
import SpotifyPlayer from "@/components/molecules/SpotifyPlayer";
import Footer from "@/components/organisms/Footer";

function getBaseUrl() {
    const headersList = headers();
    const host = headersList.get("host");
    const protocol = host?.includes("localhost") ? "http" : "https";
    return `${protocol}://${host}`;
}

export default async function Page({ params }) {
    const { guid } = params;
    const baseUrl = getBaseUrl();

    // 1️⃣ Fetch order
    const orderRes = await fetch(`${baseUrl}/api/getOrder?guid=${guid}`, {
        cache: "no-store",
    });

    if (!orderRes.ok) return notFound();
    const order = await orderRes.json();

    const eventId = order?.tickets?.[0]?.ticket?.event_id;
    if (!eventId) return notFound();

    // 2️⃣ Fetch eventData
    const eventDataRes = await fetch(`${baseUrl}/api/searchEvents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventId }),
        cache: "no-store",
    });

    if (!eventDataRes.ok) return notFound();
    const eventData = await eventDataRes.json();

    const event = eventData?.data?.[0];
    const slug = event?.slug;
    if (!slug) return notFound();

    // 3️⃣ Fetch eventDetails
    const eventDetailsRes = await fetch(`${baseUrl}/api/getEventDetails?slug=${slug}`, {
        cache: "no-store",
    });

    if (!eventDetailsRes.ok) return notFound();
    const eventDetails = await eventDetailsRes.json();

    return (
        <div>
            <Header />

            <Hero order={order} />

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-12 mb-lg lg:mb-0">
                            <TicketCard order={order} />
                        </div>
                        <div className="col-lg-5 col-12">
                            <PersonalCard order={order} />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-12 mb-lg lg:mb-0">
                            <PaymentSummaryCard order={order} />
                        </div>
                        <div className="col-lg-7 col-12">
                            <CountDownCard order={order} />
                        </div>
                    </div>
                </div>
            </section>

            {event?.spotify && (
                <section>
                    <div className="container">
                        <SpotifyPlayer spotifyUri={event.spotify} />
                    </div>
                </section>
            )}

            <Footer />
        </div>
    );
}
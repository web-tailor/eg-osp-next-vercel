export default function Hero({ event }) {
    if (!event) return (
        <section className="hero">
            <div className="container text-center">
                <h2 className="mb-0 text-white">Get ready for</h2>
                <h1>...</h1>
            </div>
        </section>
    );

    return (
        <section className="hero">
            <div className="container text-center">
                <h2 className="mb-0 text-white">Get ready for</h2>
                {event && <h1>{event.name}</h1>}
            </div>
        </section>
    );
}
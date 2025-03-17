export default function Hero({ order }) {
    if (!order) return (
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
                {order && <h1>{order.tickets[0].ticket.event.name}</h1>}
            </div>
        </section>
    );
}
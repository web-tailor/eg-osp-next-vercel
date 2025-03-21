export default function EventList({ event }) {
    if (!event) return <p>Loading events...</p>;

    return (
        <section>
            <div className="container">
                <div className="p-4 border rounded-lg shadow-lg mt-4">
                    <div className="row">
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <img src={event.image} alt={event.name} className="w-full h-auto rounded-lg mt-2"/>
                        </div>
                        <div className="col-lg-8">
                            <h2 className="text-xl font-bold">{event.name}</h2>
                            <p className="text-gray-600">{event.subtitle}</p>
                            <p className="mt-2 text-sm">Starts: {new Date(event.start_date).toLocaleString()}</p>
                            <p className="text-sm">Ends: {new Date(event.end_date).toLocaleString()}</p>
                        </div>
                    </div>
                </div>
                {/*<pre className="p-2 rounded text-white">{JSON.stringify(event, null, 2)}</pre>*/}
            </div>
        </section>
    );
}
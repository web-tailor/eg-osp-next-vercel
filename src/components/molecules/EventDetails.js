export default function EventDetails({ details }) {
    if (!details) return <p>Loading event details...</p>;

    return (
        <div className="p-4 border rounded-lg shadow-lg mt-4">
            <h2 className="text-xl font-bold">Event Details</h2>
            {/*<pre className="p-2 rounded">{JSON.stringify(details, null, 2)}</pre>*/}
        </div>
    );
}
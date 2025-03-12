export default function Order({ order }) {
    if (!order) return <p>Loading order...</p>;
    return (
        <div className="p-4 border rounded-lg shadow-lg mt-4">
            <h2 className="text-xl font-bold">Hi {order.firstName}</h2>

            {/*<pre className="p-2 rounded">{JSON.stringify(order, null, 2)}</pre>*/}
        </div>
    );
}
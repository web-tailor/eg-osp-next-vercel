export default function CountDownCard({ order }) {
    if (!order) return <p>Loading order...</p>;
    return (
        <div className="card card--countdown bg-white">
           <h2>Countdown</h2>
        </div>
    );
}
export default function TicketCard({ order }) {
    if (!order) return <p>Loading order...</p>;
    return (
        <div className="card card--personal bg-blue">

            <div>
                <img src="https://quickchart.io/qr?text=<?php echo $ticket->ticket_number; ?>&size=250&margin=2"
                     className="d-block mx-auto rounded-3 ratio-1x1"/>
            </div>

        </div>
    );
}
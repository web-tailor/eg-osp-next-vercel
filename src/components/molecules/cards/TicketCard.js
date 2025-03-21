export default function TicketCard({ order }) {
    if (!order || !order.tickets) return <p>Loading ticket(s)...</p>;
    const tickets = order.tickets;

    return (
        <div className="card card--ticket bg-primary-600 text-white">
            {tickets.map((ticket, i) => (
                <div key={ticket.ticket_number} className="mb-lg">
                    <div className="mb-md">Ticket {i + 1} of {tickets.length}</div>

                    <div className="row">
                        <div className="col-lg-6 mb-md lg:mb-0">
                            <img
                                src={`https://quickchart.io/qr?text=${ticket.ticket_number}&size=250&margin=2`}
                                alt="Ticket QR"
                                className="rounded-lg aspect-square w-full"
                            />
                        </div>

                        <div className="col-lg-6">
                            {ticket?.ticket?.event?.location?.name && (<div className="text-[16px] mb-sm">{ticket.ticket.event.location.name}</div>)}
                            <h2 className="text-[56px] leading-[1]">{ticket.ticket.name}</h2>

                            <a
                                href={ticket.download_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button"
                            >
                                Open ticket
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function PaymentSummaryCard({ order }) {
    if (!order) return <p>Loading order...</p>;
    return (
        <div className="card card--payment-summary bg-tertiary-400">
            <h2 className="text-primary-600">Payout summary</h2>
            <div className="text-primary-400 mb-lg">
                {order.payments && order.payments.length > 0 ? (
                    order.payments.map((payment) => (
                        <div key={payment.payment_id}>Payment ID: {payment.payment_id}</div>
                    ))
                ) : (
                    <div>No payments found.</div>
                )}
            </div>
            <div className="tickets">
                {order.tickets && order.tickets.length > 0 ? (
                    order.tickets.map((ticket, index) => (
                        <div className="ticket mb-md flex justify-between" key={index}>
                            <div className="font-extrabold">{ticket.ticket.name}</div>
                            <div className="text-right">
                                <div className="font-extrabold">
                                    {new Intl.NumberFormat('nl-NL', {
                                        style: 'currency',
                                        currency: 'EUR',
                                    }).format(ticket.finn_price / 100)}
                                </div>
                                <div className="text-[14px] text-neutral-600">
                                    {ticket.finn_service_fee > 0 &&
                                        `${new Intl.NumberFormat('nl-NL', {
                                            style: 'currency',
                                            currency: 'EUR',
                                        }).format(ticket.finn_service_fee / 100)} commission`}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No tickets found.</p>
                )}
            </div>
            <hr className="my-lg border-tertiary-600"/>
            <div>
                {order.payments && order.payments.length > 0 ? (
                    order.payments.map((payment) => (
                        <div key={payment.payment_id}>
                            <div className="flex justify-between text-[14px]">
                                <div className="text-neutral-600">Subtotal</div>
                                <div>
                                    {new Intl.NumberFormat('nl-NL', {
                                        style: 'currency',
                                        currency: 'EUR',
                                    }).format(payment.finn_value / 100)}
                                </div>
                            </div>
                            <div className="flex justify-between text-[14px]">
                                <div className="text-neutral-600">Service fee</div>
                                <div>
                                    {new Intl.NumberFormat('nl-NL', {
                                        style: 'currency',
                                        currency: 'EUR',
                                    }).format(payment.finn_service_fee / 100)}
                                </div>
                            </div>
                            <div className="flex justify-between mt-md font-extrabold">
                                <div>Total</div>
                                <div>
                                    {new Intl.NumberFormat('nl-NL', {
                                        style: 'currency',
                                        currency: 'EUR',
                                    }).format(payment.finn_price / 100)}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No payment details available.</p>
                )}
            </div>

        </div>
    );
};
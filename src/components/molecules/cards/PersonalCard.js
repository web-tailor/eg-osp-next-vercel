export default function PersonalCard({ order }) {
    if (!order) return <p>Loading order...</p>;
    return (
        <div className="card card--personal bg-white">
            <h2 className="text-blue lg:text-[86px] leading-[1]">Let’s get ready!</h2>
            <div className="mb-2">
                <div className="text-gray_500 text-[16px]">Name</div>
                <div className="font-extrabold">{order.firstName}</div>
            </div>
            <div className="mb-2">
                <div className="text-gray_500 text-[16px]">Surname</div>
                <div className="font-extrabold">{order.lastName}</div>
            </div>
            <div className="mb-2">
                <div className="text-gray_500 text-[16px]">E-mail</div>
                <div className="font-extrabold">{order.email}</div>
            </div>
        </div>
    );
}
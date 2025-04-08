'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import IconChevronLeft from '@/components/atoms/icons/IconChevronLeft';
import IconChevronRight from '@/components/atoms/icons/IconChevronRight';

export default function TicketCard({ order }) {
    if (!order || !order.tickets) return <p>Loading ticket(s)...</p>;
    const tickets = order.tickets;

    return (
        <div className="card card--ticket bg-primary-600 text-white">
            <div className="ticket-swiper-wrapper relative">
                <Swiper
                    spaceBetween={24}
                    slidesPerView={1}
                    pagination={{
                        el: '.ticket-swiper-pagination',
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<div class="${className}" aria-label="Go to slide ${index + 1}"></div>`;
                        },
                    }}
                    navigation={{
                        nextEl: '.ticket-swiper-next',
                        prevEl: '.ticket-swiper-prev',
                    }}
                    modules={[Pagination, Navigation]}
                >
                    {tickets.map((ticket, i) => (
                        <SwiperSlide key={ticket.ticket_number}>

                            <div className="row">
                                <div className="col-sm-6 col-12">
                                    <div className="button button--black button--small mb-md">
                                        Ticket {i + 1} of {tickets.length}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 mb-md sm:mb-0">
                                    <img
                                        src={`https://quickchart.io/qr?text=${ticket.ticket_number}&size=250&margin=2`}
                                        alt="Ticket QR"
                                        className="rounded-lg aspect-square w-full"
                                    />
                                </div>

                                <div className="col-sm-6 flex flex-col justify-between">
                                   <div className="mb-md">
                                       {ticket?.ticket?.event?.location?.name && (
                                           <div className="text-[16px] mb-sm">
                                               {ticket.ticket.event.location.name}
                                           </div>
                                       )}
                                       <h2 className="md:text-[56px] leading-[1]">{ticket.ticket.name}</h2>
                                   </div>
                                    <div>
                                        <a
                                            href={ticket.download_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="button button--white block"
                                        >
                                            Download ticket
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="row mt-lg">
                    <div className="col-lg-6">
                        <div className="ticket-swiper-pagination"/>
                    </div>
                </div>
                <div className="ticket-swiper-navigation">
                    <div className="ticket-swiper-prev">
                        <IconChevronLeft/>
                    </div>
                    <div className="ticket-swiper-next">
                        <IconChevronRight/>
                    </div>
                </div>
            </div>

        </div>
    );
}
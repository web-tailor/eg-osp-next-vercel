"use client";
import {useCountdown} from '@/utils/useCountdown';
import TimeBlock from '@/components/atoms/TimeBlock';

export default function CountdownCard({ event }) {
    if (!event) return null;

    const startDate = new Date(event.start_date); // this replaces the PHP date()
    const { days, hours, minutes, seconds } = useCountdown(startDate);

    const day = startDate.toLocaleString("nl-NL", { day: "numeric" });
    const month = startDate.toLocaleString("nl-NL", { month: "short" });

    const isExpired = new Date() >= new Date(event.start_date);

    return (
        <div
            className="card card--countdown bg-white background-image"
            style={{ backgroundImage: `url(${event.image})` }}
        >
            <div className="inner-column">
                <div className="date">
                    <div className="day">{day}</div>
                    <div className="month">{month}</div>
                </div>
                {isExpired ? (
                    <h4>Have fun!</h4>
                ) : (
                    <div className="countdown gap-4">
                        <TimeBlock label="Days" value={days}/>
                        <TimeBlock label="Hours" value={hours}/>
                        <TimeBlock label="Minutes" value={minutes}/>
                        <TimeBlock label="Seconds" value={seconds}/>
                    </div>
                )}
            </div>

        </div>
    );
}
import { useState, useEffect } from "react";

export function useCountdown(targetDate) {
    const countdownDate = new Date(targetDate).getTime();

    const [timeLeft, setTimeLeft] = useState(countdownDate - Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(countdownDate - Date.now());
        }, 1000);

        return () => clearInterval(interval);
    }, [countdownDate]);

    const total = Math.max(timeLeft, 0);

    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);

    return { days, hours, minutes, seconds };
}

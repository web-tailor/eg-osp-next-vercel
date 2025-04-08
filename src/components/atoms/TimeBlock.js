"use client";
import { useEffect, useState } from "react";

export default function TimeBlock({label, value}) {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;
    return (
        <div className="time-block">
            <span className="number">{String(value).padStart(2, "0")}</span>
            <span className="name">{label}</span>
        </div>
    );
}

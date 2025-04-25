'use client';

import { useState } from 'react';
import WazeMap from "@/components/atoms/maps/WazeMap";
import Stay22Map from "@/components/atoms/maps/Stay22Map";
import GoogleMap from "@/components/atoms/maps/GoogleMap";

const tabs = [
    { label: 'Google Maps', key: 'google' },
    { label: 'Waze', key: 'waze' },
    { label: 'Hotels', key: 'stay22' },
];

export default function MapsCard({ event }) {
    const [activeTab, setActiveTab] = useState('google');

    if (!event) return <p>Loading event...</p>;

    const { latitude, longitude } = event.portal;
    const startDate = event.start_date;

    const renderMap = () => {
        switch (activeTab) {
            case 'google':
                return <GoogleMap latitude={latitude} longitude={longitude} />;
            case 'waze':
                return <WazeMap latitude={latitude} longitude={longitude} />;
            case 'stay22':
                return <Stay22Map latitude={latitude} longitude={longitude} startDate={startDate} />;
            default:
                return null;
        }
    };

    return (
        <div className="card card--map">
            <div className="flex flex-col mb-1 md:flex-row md:space-x-2 md:mb-4">
                {tabs.map(tab => (
                    <div
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`button flex-1 mb-3 md:mb-0 ${
                            activeTab === tab.key
                                ? 'bg-primary-600 text-white'
                                : 'bg-white text-primary-600 hover:bg-primary-300'
                        }`}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
            {renderMap()}
        </div>
    );
}
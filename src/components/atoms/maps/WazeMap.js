export default function WazeMap ({ latitude, longitude }) {
    const src = `https://embed.waze.com/iframe?zoom=12&lat=${latitude}&lon=${longitude}`;

    return (
        <iframe
            src={src}
            height="500"
            className="w-full rounded-2xl border-0"
            allowFullScreen
            loading="lazy"
            title="Waze Map"
        />
    );
}
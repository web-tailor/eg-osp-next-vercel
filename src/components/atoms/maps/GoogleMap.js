export default function GoogleMap ({ latitude, longitude }) {
    const src = `https://www.google.com/maps?q=${latitude},${longitude}&z=14&output=embed`;

    return (
        <iframe
            src={src}
            height="500"
            className="w-full rounded-2xl border-0"
            allowFullScreen
            loading="lazy"
            title="Google Map"
        />
    );
}

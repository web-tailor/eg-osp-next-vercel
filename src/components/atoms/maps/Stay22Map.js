export default function Stay22Map ({ latitude, longitude, startDate }) {
    const baseUrl = 'https://www.stay22.com/embed/gm';
    const aid = 'studiotoffolo';
    const mainColor = '33B1D7';

    const params = new URLSearchParams({
        aid,
        lat: latitude,
        lng: longitude,
        maincolor: mainColor,
    });

    if (startDate) {
        const checkin = new Date(startDate).toISOString().split('T')[0]; // formats to YYYY-MM-DD
        params.append('checkin', checkin);
    }

    const src = `${baseUrl}?${params.toString()}`;

    return (
        <iframe
            src={src}
            height="500"
            frameBorder="0"
            className="w-full rounded-2xl border-0"
            allowFullScreen
            loading="lazy"
            title="Stay22 Map"
        />
    );
}
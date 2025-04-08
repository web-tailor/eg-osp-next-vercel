import IconSwirlRight from '@/components/atoms/icons/IconSwirlRight';
import IconArrow from '@/components/atoms/icons/IconArrow';

export default function TextBlockImageCard({ event }) {
    if (!event) return <p>Loading event...</p>;
    const text_block = event.text_blocks[0];
    const portalSlug = event.portal?.slug;
    const eventSlug = event.slug;
    const eventUrl = `https://mobiliteit.onlineticket.nl/${portalSlug}/${eventSlug}`;
    return (
        <div
            className="card card--text-block-image bg-white background-image"
            style={{backgroundImage: `url(${text_block.image})`}}
        >
            <IconSwirlRight/>
            <div className="inner-column">
                <a
                    href={eventUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button border border-white bg-white/40 backdrop-blur-sm text-neutral-100"
                >
                    Help
                    <IconArrow/>
                </a>
            </div>
        </div>
    );
}
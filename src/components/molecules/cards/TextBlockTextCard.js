import IconSwirlLeft from '@/components/atoms/icons/IconSwirlLeft';

export default function TextBlockTextCard({ event }) {
    if (!event) return <p>Loading event...</p>;
    const text_block = event.text_blocks[0];
    return (
        <div className="card card--text-block-text bg-white">
            <IconSwirlLeft/>
            {/*<h2 className="gradient-text lg:text-[102px] leading-none">{text_block.name}</h2>
            <div dangerouslySetInnerHTML={{ __html: text_block.text }}></div>*/}
            <h2 className="gradient-text lg:text-[102px] leading-none">Event & Go</h2>
            <div>
                <p>Je bent gegarandeerd van een voor jou gereserveerde parkeerplaats op een van de parkeerterreinen.
                    Comfortabel reizen op eigen gelegenheid en met je eigen auto. Het parkeerticket koop je vertrouwd
                    via Event & Go, al jarenlang partner van de Gemeente Amsterdam.</p>
            </div>
        </div>
    );
}
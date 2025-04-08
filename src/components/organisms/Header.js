import IconLogo from "@/components/atoms/icons/IconLogo";

export default function Header({ event }) {
    const portalSlug = event?.portal?.slug;
    return (
        <header id="header">
            <div className="container flex items-center justify-between">
                <IconLogo/>
                {portalSlug && (
                    <a
                        href={`https://mobiliteit.onlineticket.nl/${portalSlug}/contact`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-100 font-semibold"
                    >Help</a>
                )}
            </div>
        </header>
    );
}
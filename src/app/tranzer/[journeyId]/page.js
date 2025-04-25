import { headers } from "next/headers";
import { notFound } from "next/navigation";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";


async function getBaseUrl() {
    const headersList = await headers(); // ✅ await now required
    const host = headersList.get("host");
    const protocol = host?.includes("localhost") ? "http" : "https";
    return `${protocol}://${host}`;
}


export default async function Page({ params }) {
    const { journeyId } = await params;
    const baseUrl = await getBaseUrl();


    return (
        <div>
            <Header />

            <section>
                <div className="container">
                   <h1 className="text-neutral-100">Hello</h1>
                    <div>{ journeyId }</div>
                </div>
            </section>

            <Footer/>
        </div>
    );
}
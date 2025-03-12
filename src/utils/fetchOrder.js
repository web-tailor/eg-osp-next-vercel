export async function fetchOrder(guid) {
    try {
        const response = await fetch(`/api/getOrder?guid=${guid}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        return await response.json();
    } catch (error) {
        console.error("Error fetching order:", error);
        return null;
    }
}
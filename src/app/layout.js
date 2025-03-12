import "../styles/app.scss";

export const metadata = {
  title: "Event & Go",
  description: "Verzekerd van een parkeerplek! Niet ter plaatse afrekenen, maar onbezorgd genieten van het concert.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

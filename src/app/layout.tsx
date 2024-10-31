import type { Metadata } from "next";
// prettier-ignore
import "primereact/resources/primereact.min.css";
// prettier-ignore
import "primeicons/primeicons.css";
// prettier-ignore
import { PrimeReactProvider } from "primereact/api";
import "./globals.css";

export const metadata: Metadata = {
  title: "First Day",
  description: "An onboarding app and training platform for your employees.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PrimeReactProvider>{children}</PrimeReactProvider>
      </body>
    </html>
  );
}

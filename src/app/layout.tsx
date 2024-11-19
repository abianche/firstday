import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import theme from "../theme";
import "./globals.css";
import { StoreProvider } from "./StoreProvider";

const title = "First Day";
const description =
  "An onboarding app and training platform for your employees.";

export const metadata: Metadata = {
  title,
  description,
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title,
    description,
    url: "https://firstday-nine.vercel.app/",
    siteName: title,
    images: [
      {
        url: "https://firstday-nine.vercel.app/preview.png",
        width: 1200,
        height: 600,
        alt: "First Day preview image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://firstday-nine.vercel.app/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link
            rel="icon"
            type="image/png"
            href="/favicon-96x96.png"
            sizes="96x96"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <meta name="apple-mobile-web-app-title" content="First Day" />
        </head>
        <body>
          <Analytics />
          <SpeedInsights />
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline enableColorScheme />
              <InitColorSchemeScript attribute="data-mui-color-scheme" />
              <main>{children}</main>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </StoreProvider>
  );
}

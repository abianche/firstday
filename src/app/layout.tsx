import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import theme from "../theme";
import "./globals.css";
import { StoreProvider } from "./StoreProvider";

const title = "First Day";
const description =
  "An onboarding app and training platform for your employees";
const url = "https://firstday-main.vercel.app";

export const metadata: Metadata = {
  title,
  description,
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    images: [
      {
        url: `${url}/preview.jpg`,
        width: 1200,
        height: 630,
        alt: "Coming Soon",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${url}/preview.jpg`],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1017" },
  ],
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

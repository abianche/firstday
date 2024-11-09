import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import theme from "../theme";
import "./globals.css";

export const metadata: Metadata = {
  title: "First Day",
  description: "An onboarding app and training platform for your employees.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "First Day",
    description: "An onboarding app and training platform for your employees.",
    url: "https://firstday-nine.vercel.app/",
    siteName: "First Day",
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
    title: "First Day",
    description: "An onboarding app and training platform for your employees.",
    images: ["https://firstday-nine.vercel.app/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

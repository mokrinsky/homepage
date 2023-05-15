import { cn } from "@/lib/utils"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Inter, JetBrains_Mono, Caveat } from "next/font/google"
import { Metadata } from "next"

const fontSans = Inter({ variable: "--font-sans", subsets: ["latin"] })
const fontJetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], weight: "400" })
const fontCaveat = Caveat({ variable: "--font-caveat", subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: {
    default: "nico mokrinsky",
    template: "%s | nico mokrinsky",
  },
  themeColor: "#1e1e2e",
  description: "devops, nerd, metalhead, weeb",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: {
      template: "%s | nico mokrinsky",
      default: "nico mokrinsky",
    },
    description: "devops, nerd, metalhead, weeb",
    siteName: "nico mokrinsky",
    locale: "en-US",
    type: "website",
    url: "https://kolya.it/",
    images: "https://idm1try.ru/api/og?heading=idm1try&desc=Frontend%20Developer",
  },
  icons: {
    icon: "/favicon.png",
    apple: "apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://kolya.it/",
  },
  manifest: "/site.webmanifest",
  other: {
    "darkreader-lock": "",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(
        "scroll-smooth font-sans text-text bg-base",
        "antialiased selection:bg-surface1 dark:mocha font-medium",
        fontSans.variable,
        fontJetbrains.variable,
        fontCaveat.variable
      )}
    >
      <body>
        <div className="mx-auto max-w-3xl px-6 pb-20">
          <main className="pt-16">
            {children}
            <Analytics />
          </main>
        </div>
        <span className="text-blue" />
        <span className="text-rosewater" />
        <span className="text-sapphire" />
      </body>
    </html>
  )
}

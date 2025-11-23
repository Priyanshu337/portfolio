import "@/styles/globals.css"
import { Metadata, Viewport } from "next"
import { Inter } from 'next/font/google'

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "../components/footer"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://priyanshuchoudhary.vercel.app'),
  title: 'Priyanshu Choudhary - Full Stack Developer',
  description: 'Portfolio website of Priyanshu Choudhary, a Full Stack Developer specializing in modern web technologies.',
  keywords: ['Full Stack Developer', 'Web Development', 'React', 'Next.js', 'TypeScript', 'Node.js'],
  authors: [{ name: 'Priyanshu Choudhary' }],
  creator: 'Priyanshu Choudhary',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://priyanshuchoudhary.vercel.app',
    title: 'Priyanshu Choudhary - Full Stack Developer',
    description: 'Portfolio website of Priyanshu Choudhary, a Full Stack Developer specializing in modern web technologies.',
    siteName: 'Priyanshu Choudhary Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priyanshu Choudhary - Full Stack Developer',
    description: 'Portfolio website of Priyanshu Choudhary, a Full Stack Developer specializing in modern web technologies.',
    creator: '@priyanshu0209',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'google-site-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body
          className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable,
            inter.className
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="min-w-screen relative flex min-h-screen flex-col items-center">
              <SiteHeader />
              <div className=" flex-1">{children}</div>
              <div className="w-full flex-1">
                <Footer />
              </div>
            </div>
            <TailwindIndicator />
            <SpeedInsights />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

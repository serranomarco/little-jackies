import type { Metadata } from 'next'
import { Roboto_Flex, Poppins } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const roboto = Roboto_Flex({
    subsets: ['latin'],
    variable: '--font-roboto',
})

const poppins = Poppins({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
})

export const metadata: Metadata = {
    title: "Little Jackie's Cleaning Service",
    description:
        'Affordable, next-day home and office cleaning in the Portland area with easy scheduling and trusted cleaners.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'LocalBusiness',
                            name: "Little Jackie's Cleaning Service",
                            image: 'https://littlejackies.com/logo.png',
                            description:
                                'Affordable, next-day home and office cleaning in the Portland area with easy scheduling and trusted cleaners.',
                            url: 'https://littlejackies.com',
                            telephone: '+1-971-888-0654',
                            areaServed: {
                                '@type': 'Place',
                                name: 'Portland, OR',
                            },
                            sameAs: [
                                'https://www.facebook.com/profile.php?id=61577707376333',
                            ],
                        }),
                    }}
                />
            </head>
            <body className={`${roboto.variable} ${poppins.variable}`}>
                <div className="flex flex-col min-h-screen">
                    <NavBar />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    )
}

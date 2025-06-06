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
        'Cleaning Service that prides itself on affordable prices and easy to schedule cleaning for you residence or company',
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

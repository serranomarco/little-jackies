export default function ContactLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <div className="pt-20 flex-1">{children}</div>
}

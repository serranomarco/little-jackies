export default function ServicesLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <div className="pt-20 flex-1">{children}</div>
}

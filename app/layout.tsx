import type { Metadata } from "next"
import { Share_Tech_Mono } from "next/font/google"

import "./globals.css"

const techMono = Share_Tech_Mono({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "Brayden Parish",
  description: "Created by Brayden Parish",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background text-foreground">
      <body className={techMono.className}>{children}</body>
    </html>
  )
}

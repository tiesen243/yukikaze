import "@yuki/tailwind-config/tailwind.css"

import { Inter } from "next/font/google"

import { cn } from "@yuki/ui"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata = {
  title: "Yukikaze",
  description: "A Next.js turbo repo starter",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={cn(inter.variable, "font-sans")}>{children}</body>
  </html>
)

export default RootLayout

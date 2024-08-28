import "@yuki/tailwind-config/tailwind.css"

import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"

import { cn } from "@yuki/ui"
import { Toaster } from "@yuki/ui/sonner"

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
    <body className={cn(inter.variable, "font-sans")}>
      <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
        {children}
        <Toaster richColors />
      </ThemeProvider>
    </body>
  </html>
)

export default RootLayout

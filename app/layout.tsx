import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Билим Оюн",
  description: "Билим Оюн — билим берүүчү оюндар платформасы.",
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ky">
      <body>{children}</body>
    </html>
  )
}

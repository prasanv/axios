import React from "react"
// note: the global.css is simply imported at the root layout not called or wrapped around anywhere
import './global.css'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }
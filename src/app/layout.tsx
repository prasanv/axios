import React from "react"
// note: the global.css is simply imported at the root layout not called or wrapped around anywhere
import './global.css'
import Nav from "../components/navigation";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ["latin"]
})

export const revalidate = 3;

export const metadata = {
  title: 'NextJS 13',
  description: 'NextJS 13 demo project'
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" className={poppins.className}>
        <body className="container">
          <Nav></Nav>
          <main>{children}</main>
        </body>
      </html>
    )
  }
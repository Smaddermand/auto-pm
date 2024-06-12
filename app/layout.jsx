// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

import React from 'react'

import "@/assets/styles/globals.css"

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata = {
  tile: "autoPM | Automate your Project Management",
  description: "Automate all Project Management Tasks and todos",
  keywords: "PM, Project Management, todos"
}

const MainLayout = ( {children}) => {
  return (
    <html lang="en">
      <body>
      <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
      </body>
    </html>
  )
}

export default MainLayout
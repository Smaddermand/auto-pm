// components/Header.js
import React from 'react'

import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">My Website</Link>
        </h1>
        <nav>
          <Link href="/" className="px-4">Home</Link>
          <Link href="/about" className="px-4">About</Link>
          <Link href="/contact" className="px-4">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
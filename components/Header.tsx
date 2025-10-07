'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname() // get current path

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Resume', href: '/resume' },
    { name: 'Certificates', href: '/certificates' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow p-4 flex justify-center space-x-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`
            px-2 py-1 transition-colors duration-300
            ${pathname === link.href ? 'text-gray-500 font-bold' : 'text-gray-500'}
            hover:text-blue-500
          `}
        >
          {link.name}
        </Link>
      ))}
    </header>
  )
}

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-center space-x-6">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/resume">Resume</Link>
      <Link href="/certificates">Certificates</Link>
      <Link href="/contact">Contact</Link>
    </header>
  )
}
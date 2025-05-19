import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4">
      <ul className="flex gap-6">
        <li><Link href="/">🏠 Home</Link></li>
        <li><Link href="/tickets">🎫 Tickets</Link></li>
        <li><Link href="/about">ℹ️ About</Link></li>
      </ul>
    </nav>
  );
}

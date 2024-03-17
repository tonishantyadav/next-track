'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBug } from 'react-icons/fa'
import classNames from 'classnames'

const NavBar = () => {
  const otherLinks = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Issues', href: '/issues' },
  ]
  const path = usePathname()

  return (
    <nav className="flex gap-10 border-b p-5 sm:text-lg md:text-xl lg:text-xl">
      <ul className="flex items-center gap-2 text-slate-200">
        <li className="mr-2 hover:text-slate-400">
          <Link href="/">
            <FaBug />
          </Link>
        </li>
        <li className="pt-1 hover:text-slate-400">
          <Link href="/">Next Track</Link>
        </li>
      </ul>
      <ul className="flex items-center gap-5 pt-1 text-slate-200">
        {otherLinks.map(({ label, href }) => (
          <li
            className={classNames({
              'underline decoration-primary hover:text-slate-400':
                path === href,
              'hover:text-slate-400': true,
            })}
            key={href}
          >
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar

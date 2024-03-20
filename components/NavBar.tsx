'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBug } from 'react-icons/fa'
import classNames from 'classnames'
import { useSession } from 'next-auth/react'
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import {
  Button,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui'
import { Avatar } from './ui/avatar'
import { Session } from 'next-auth'
import { AvatarImage } from '@radix-ui/react-avatar'

const NavBar = () => {
  const otherLinks = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Issues', href: '/issues' },
  ]
  const path = usePathname()
  const { status, data: session } = useSession()

  return (
    <nav className="sm:text-md container flex justify-between border-b py-4 md:text-lg lg:text-lg">
      <div className="flex gap-10">
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
      </div>
      <div className="mt-2 cursor-pointer">
        {status === 'authenticated' && <AuthStatus session={session} />}
        {status === 'unauthenticated' && (
          <Link href="/api/auth/signin" className="hover:text-slate-400">
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}

const AuthStatus = ({ session }: { session: Session }) => {
  console.log(session.user?.image)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {session.user?.image && (
          <Avatar>
            <AvatarImage
              src={session.user.image}
              alt="?"
              referrerPolicy="no-referrer"
            />
          </Avatar>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <p>{session.user?.email}</p>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/api/auth/signout" className="flex w-full">
            <Button className="w-full" size="sm">
              Logout
            </Button>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NavBar

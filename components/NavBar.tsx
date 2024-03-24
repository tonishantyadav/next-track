'use client'

import classNames from 'classnames'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBug } from 'react-icons/fa'
import { Button, Skeleton } from './ui'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { FaUser } from 'react-icons/fa6'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

const NavBar = () => {
  return (
    <div className="border-b">
      <nav className="text-md container flex justify-between p-5 md:text-lg lg:text-lg">
        <div className="flex gap-10">
          <NavLinks />
        </div>
        <div className="cursor-pointer">
          <AuthStatus />
        </div>
      </nav>
    </div>
  )
}

const NavLinks = () => {
  const otherLinks = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Issues', href: '/issues' },
  ]
  const path = usePathname()

  return (
    <>
      <ul className="flex items-center text-slate-200">
        <li className="mr-2">
          <Link href="/">
            <FaBug />
          </Link>
        </li>
        <li>
          <Link href="/">Next Track</Link>
        </li>
      </ul>
      <ul className="flex items-center gap-5  text-slate-300">
        {otherLinks.map(({ label, href }) => (
          <li
            className={classNames({
              'hover:text-slate-200': true,
              'text-slate-200': path === href,
            })}
            key={href}
          >
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

const AuthStatus = () => {
  const { status, data: session } = useSession()

  if (status === 'loading')
    return <Skeleton className="h-12 w-12 rounded-full" />

  return (
    <>
      {status === 'authenticated' && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {session?.user?.image && (
              <Avatar>
                <AvatarImage
                  src={session.user.image}
                  referrerPolicy="no-referrer"
                  className="sm"
                />
                <AvatarFallback>
                  <FaUser />
                </AvatarFallback>
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
      )}
      {status === 'unauthenticated' && (
        <Link
          href="/api/auth/signin"
          className=" text-md text-slate-300 hover:text-slate-200 md:text-lg lg:text-lg"
        >
          Login
        </Link>
      )}
    </>
  )
}

export default NavBar

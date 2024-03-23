'use client'

import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import classNames from 'classnames'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBug } from 'react-icons/fa'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Skeleton,
} from './ui'

const NavBar = () => {
  return (
    <div className="border-b">
      <nav className="container flex justify-between p-4 text-md md:text-lg lg:text-lg">
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
        <li className="mr-2 hover:text-slate-400">
          <Link href="/">
            <FaBug />
          </Link>
        </li>
        <li className=" hover:text-slate-400">
          <Link href="/">Next Track</Link>
        </li>
      </ul>
      <ul className="flex items-center gap-5  text-slate-200">
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
                <AvatarFallback>{'?'}</AvatarFallback>
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
        <Link href="/api/auth/signin" className=" hover:text-slate-400">
          Login
        </Link>
      )}
    </>
  )
}

export default NavBar

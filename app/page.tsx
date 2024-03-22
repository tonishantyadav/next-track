'use client'

import { Button } from '@/components/ui'
import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'

export default function Home() {
  const words = [
    'Create issues.',
    'Assign issues.',
    'Track issues.',
    'Filter issues.',
  ]

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center space-y-1">
        <div>
          <h1 className="p-2 text-6xl">
            Welcome to <span className="text-glow">Next Track</span>
          </h1>
        </div>
        <div className="min-h-10">
          <p className=" text-slate-300 text-lg">
            A GitHub-style issue tracker that let you to.{' '}
            <Typewriter words={words} cursor={true} loop={true} />
          </p>
        </div>{' '}
        <div>
          <Link href="/dashboard">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </>
  )
}

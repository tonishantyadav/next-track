import { Metadata } from 'next'
import Link from 'next/link'
import TypewriterEffect from './components/TypewriterEffect'
import { Button } from './components/ui'

export default function HomePage() {
  const words = [
    'create issues.',
    'assign issues.',
    'track issues.',
    'filter issues.',
  ]

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center space-y-2 text-center">
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-6xl">
            Welcome to <span className="text-glow">Next Track</span>
          </h1>
        </div>
        <div>
          <p className="text-xs text-slate-300 md:text-lg lg:text-lg">
            A GitHub-style issue tracker that facilitates you to{' '}
            <TypewriterEffect words={words} />
          </p>
        </div>{' '}
        <div>
          <Link href="/dashboard">
            <Button className="mt-1 rounded-full">Get Started</Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export const metadata: Metadata = {
  title: 'Next Track - Homepage',
  description: 'A GitHub-style issue tracker that facilitates you to create issues, assign issues, track issues, filter issues and much more.',
}

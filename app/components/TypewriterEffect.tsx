'use client'
import { Typewriter } from 'react-simple-typewriter'

const TypewriterEffect = ({ words }: { words: string[] }) => {
  return <Typewriter words={words} cursor={true} loop={true} />
}

export default TypewriterEffect

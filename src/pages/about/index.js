import React from 'react'
import { useRouter } from 'next/navigation'

export default function About() {
    const router = useRouter();

    const handleChange = () => {
        router.push("/")
    }
  return (
    <>
      <h2>This is our about us component</h2>
      <button onClick={handleChange}>Go to home</button>
    </>
  )
}

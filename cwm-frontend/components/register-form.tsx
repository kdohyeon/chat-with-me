'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { register } from '@/app/register/actions'

export default function RegisterForm() {
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  async function handleSubmit(formData: FormData) {
    const result = await register(formData)
    if (result.success) {
      router.push('/login')
    } else {
      setError(result.error)
    }
  }

  return (
    <form action={handleSubmit} className="mt-4">
      <div className="mt-4">
        <Label htmlFor="username" className="text-gray-700">Username</Label>
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="Choose a username"
          required
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
      </div>
      <div className="mt-4">
        <Label htmlFor="email" className="text-gray-700">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          required
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
      </div>
      <div className="mt-4">
        <Label htmlFor="password" className="text-gray-700">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Choose a password"
          required
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
      </div>
      <div className="mt-4">
        <Label htmlFor="confirmPassword" className="text-gray-700">Confirm Password</Label>
        <Input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm your password"
          required
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
      </div>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      <div className="flex items-baseline justify-between mt-4">
        <Button type="submit" className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">Register</Button>
        <Link href="/login" className="text-sm text-blue-600 hover:underline">Already have an account? Login</Link>
      </div>
    </form>
  )
}


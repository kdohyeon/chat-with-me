'use server'

import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  const username = formData.get('username')
  const password = formData.get('password')

  // Here, you would typically make a request to your Spring Boot backend
  // For now, we'll use a placeholder URL
  const response = await fetch('http://your-spring-boot-api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })

  if (response.ok) {
    // const data = await response.json()
    // Set a cookie with the session token or user info
    redirect('/dashboard')
  } else {
    return { success: false, error: 'Invalid username or password' }
  }
}


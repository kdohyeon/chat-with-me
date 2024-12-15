'use server'

export async function register(formData: FormData) {
  const username = formData.get('username')
  const email = formData.get('email')
  const password = formData.get('password')
  const confirmPassword = formData.get('confirmPassword')

  // Basic validation
  if (password !== confirmPassword) {
    return { success: false, error: 'Passwords do not match' }
  }

  // Here, you would typically make a request to your Spring Boot backend
  // For now, we'll use a placeholder URL
  const response = await fetch('http://your-spring-boot-api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  })

  if (response.ok) {
    return { success: true }
  } else {
    const data = await response.json()
    return { success: false, error: data.message || 'Registration failed' }
  }
}


'use server'

export async function logout() {

  // Here you would typically also make a request to your backend to invalidate the session
  // For example:
  // await fetch('http://your-spring-boot-api/logout', {
  //   method: 'POST',
  //   headers: {
  //     'Authorization': `Bearer ${cookies().get('session')?.value}`
  //   }
  // })

  // Note: In a real application, you'd want to handle any errors that might occur during logout
}


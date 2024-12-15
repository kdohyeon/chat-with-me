'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { User, LogOut } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logout } from '@/app/logout/actions'

export function TopBar() {
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    setIsLoggingOut(true)
    await logout()
    router.push('/login')
  }

  return (
    <div className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200">
      <h1 className="text-2xl font-semibold text-blue-600">Dashboard</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-8 h-8 p-0 text-gray-700 hover:bg-blue-50">
            <span className="sr-only">Open user menu</span>
            <User className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-white border-gray-200">
          <DropdownMenuItem onSelect={() => router.push('/dashboard/profile')} className="text-gray-700 hover:bg-blue-50">
            My Profile
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={handleLogout} disabled={isLoggingOut} className="text-gray-700 hover:bg-blue-50">
            <LogOut className="w-4 h-4 mr-2" />
            {isLoggingOut ? 'Logging out...' : 'Logout'}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}


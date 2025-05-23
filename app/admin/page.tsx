"use client"

import { useEffect, useState } from "react"
import { getContactSubmissions } from "../actions"
import { AdminClient } from "./admin-client"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [submissions, setSubmissions] = useState<any>({ success: false, data: [], message: "" })

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/admin/check-auth")
        if (response.ok) {
          setIsAuthenticated(true)
          const submissionsData = await getContactSubmissions()
          setSubmissions(submissionsData)
        } else {
          window.location.href = "/admin/login"
        }
      } catch (error) {
        window.location.href = "/admin/login"
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return <AdminClient success={submissions.success} data={submissions.data} message={submissions.message} />
}
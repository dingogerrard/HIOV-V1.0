"use client"

import { useEffect, useState } from "react"
import { getContactSubmissions } from "../actions"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" })
    window.location.href = "/admin/login"
  }

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

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Contact Submissions</h1>
        <Button onClick={handleLogout} variant="outline">
          Logout
        </Button>
      </div>

      {!submissions.success ? (
        <p className="text-red-600">{submissions.message || "Failed to load submissions"}</p>
      ) : submissions.data && submissions.data.length > 0 ? (
        <div className="grid gap-6">
          {submissions.data.map((submission: any, index: number) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>
                  {submission.firstName} {submission.lastName}
                </CardTitle>
                <CardDescription>
                  {submission.email} • {new Date(submission.timestamp).toLocaleString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-1">Company: {submission.company || "N/A"}</p>
                <p className="text-gray-700">{submission.message}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No submissions yet.</p>
      )}
    </div>
  )
}
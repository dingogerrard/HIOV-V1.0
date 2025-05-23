"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getContactSubmissions } from "../actions"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"

function LogoutButton() {
  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" })
    window.location.href = "/admin/login"
  }

  return (
    <Button onClick={handleLogout} variant="outline">
      Logout
    </Button>
  )
}

export default async function AdminPage() {
  const cookieStore = await cookies()
  const adminAuth = cookieStore.get("admin-auth")

  if (!adminAuth || adminAuth.value !== "authenticated") {
    redirect("/admin/login")
  }

  const { success, data, message } = await getContactSubmissions()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Contact Submissions</h1>
        <LogoutButton />
      </div>

      {!success ? (
        <p className="text-red-600">{message || "Failed to load submissions"}</p>
      ) : data && data.length > 0 ? (
        <div className="grid gap-6">
          {data.map((submission: any, index: number) => (
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

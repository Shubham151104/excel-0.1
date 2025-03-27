import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Admin panel",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-3">
              <h1 className="text-lg font-semibold">Admin Panel</h1>
            </div>
          </nav>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
} 
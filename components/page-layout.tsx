'use client'

import { AppSidebar } from './app-sidebar'
import { AppTopbar } from './app-topbar'

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <AppSidebar />

      <div className="flex-1 lg:ml-64 flex flex-col">
        <AppTopbar />
        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto p-6 pt-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

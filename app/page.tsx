"use client"

import { useState } from "react"
import { stats } from "@/lib/data"
import { StatCard } from "@/components/dashboard/stat-card"
import { OrdersTable } from "@/components/dashboard/orders-table"
import { Header } from "@/components/dashboard/header"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function DashboardPage() {
  const [locale, setLocale] = useState<"en" | "ar">("en")
  const isRtl = locale === "ar"

  return (
    <SidebarProvider defaultOpen={true}>
      <div 
        dir={isRtl ? "rtl" : "ltr"} 
        className="flex min-h-screen w-full bg-background"
      >
        <AppSidebar locale={locale} />
        
        <SidebarInset className="flex flex-col bg-background">
          <Header locale={locale} onLocaleChange={setLocale} />

          <main className="flex flex-1 flex-col gap-8 p-6 md:p-10 max-w-[1600px] mx-auto w-full">
            {/* Overview Section */}
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                {isRtl ? "نظرة عامة" : "Overview"}
              </h2>
              <p className="text-[13px] font-medium text-muted-foreground">
                {isRtl ? "مراقبة أداء عملك في الوقت الحقيقي." : "Monitor your business performance in real-time."}
              </p>
            </div>

            {/* Stats Grid */}
            <section aria-label={isRtl ? "إحصائيات" : "Statistics"}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {stats.map((stat, idx) => (
                  <div
                    key={stat.id}
                    className="animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-both"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <StatCard stat={stat} locale={locale} />
                  </div>
                ))}
              </div>
            </section>

            {/* Orders Table Section */}
            <section 
              className="animate-in fade-in slide-in-from-bottom-5 duration-700 fill-mode-both" 
              aria-label={isRtl ? "الطلبات" : "Orders"}
            >
              <OrdersTable locale={locale} />
            </section>
          </main>

          <footer className="mt-auto border-t border-border/40 bg-muted/20 px-6 py-8 backdrop-blur-sm">
            <div className="max-w-[1600px] mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-[11px] font-bold tracking-widest uppercase text-muted-foreground/30">
                {isRtl ? "نظام إدارة الموحد — ٢٠٢٦" : "Unified Management System — 2026"}
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-[11px] font-semibold text-muted-foreground/40 hover:text-muted-foreground transition-colors">Documentation</a>
                <a href="#" className="text-[11px] font-semibold text-muted-foreground/40 hover:text-muted-foreground transition-colors">Support</a>
                <a href="#" className="text-[11px] font-semibold text-muted-foreground/40 hover:text-muted-foreground transition-colors">Status</a>
              </div>
            </div>
          </footer>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

"use client"

import { useState, useEffect } from "react"
import { stats } from "@/lib/data"
import { StatCard } from "@/components/dashboard/stat-card"
import { OrdersTable } from "@/components/dashboard/orders-table"
import { Header } from "@/components/dashboard/header"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function DashboardPage() {
  const [locale, setLocale] = useState<"en" | "ar">("en")
  const [isMounted, setIsMounted] = useState(false)

  // Initialization: Load from localStorage
  useEffect(() => {
    const savedLocale = localStorage.getItem("dashboard-locale") as "en" | "ar"
    if (savedLocale && (savedLocale === "en" || savedLocale === "ar")) {
      setLocale(savedLocale)
    }
    setIsMounted(true)
  }, [])

  // Persistence: Save to localStorage on change
  const handleLocaleChange = (newLocale: "en" | "ar") => {
    setLocale(newLocale)
    localStorage.setItem("dashboard-locale", newLocale)
  }

  const isRtl = locale === "ar"

  // Prevent hydration mismatch by waiting for mount
  if (!isMounted) return <div className="min-h-screen bg-background" />

  return (
    <SidebarProvider defaultOpen={true}>
      <div 
        dir={isRtl ? "rtl" : "ltr"} 
        className="flex min-h-screen w-full bg-background"
      >
        <AppSidebar locale={locale} />
        
        <SidebarInset className="flex flex-col bg-background">
          <Header locale={locale} onLocaleChange={handleLocaleChange} />

          <main className="flex flex-1 flex-col gap-10 p-6 md:p-10 max-w-[1600px] mx-auto w-full">
            {/* Overview Section */}
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-black tracking-tighter text-foreground">
                {isRtl ? "نظرة عامة" : "Overview"}
              </h2>
              <p className="text-sm font-medium text-muted-foreground/60 max-w-2xl leading-relaxed">
                {isRtl ? "مراقبة أداء عملك في الوقت الحقيقي من خلال مؤشرات الأداء الرئيسية والتحليلات المتقدمة." : "Monitor your business performance in real-time through key performance indicators and advanced analytics."}
              </p>
            </div>

            {/* Stats Grid */}
            <section aria-label={isRtl ? "إحصائيات" : "Statistics"}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
                {stats.map((stat, idx) => (
                  <div
                    key={stat.id}
                    className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <StatCard stat={stat} locale={locale} />
                  </div>
                ))}
              </div>
            </section>

            {/* Orders Table Section */}
            <section 
              className="animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both" 
              aria-label={isRtl ? "الطلبات" : "Orders"}
            >
              <OrdersTable locale={locale} />
            </section>
          </main>

          <footer className="mt-auto border-t border-border/40 bg-muted/10 px-6 py-10 backdrop-blur-sm md:px-10">
            <div className="max-w-[1600px] mx-auto flex flex-col items-center justify-between gap-6 md:flex-row">
              <p className="text-[11px] font-bold tracking-tight text-muted-foreground/30">
                {isRtl ? "نظام إدارة الموحد — ٢٠٢٦" : "Unified Management System — 2026"}
              </p>
              <div className="flex items-center gap-8">
                <a href="#" className="text-xs font-semibold text-muted-foreground/40 hover:text-foreground transition-colors">
                  {isRtl ? "الوثائق" : "Documentation"}
                </a>
                <a href="#" className="text-xs font-semibold text-muted-foreground/40 hover:text-foreground transition-colors">
                  {isRtl ? "الدعم" : "Support"}
                </a>
                <a href="#" className="text-xs font-semibold text-muted-foreground/40 hover:text-foreground transition-colors">
                  {isRtl ? "الحالة" : "Status"}
                </a>
              </div>
            </div>
          </footer>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

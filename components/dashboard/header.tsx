"use client"

import * as React from "react"
import { Bell, Search, Settings } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  locale: "en" | "ar"
  onLocaleChange: (locale: "en" | "ar") => void
}

export function Header({ locale, onLocaleChange }: HeaderProps) {
  const isRtl = locale === "ar"

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="-ml-1 text-muted-foreground hover:text-foreground" />
        <div className="hidden h-4 w-[1px] bg-border md:block" />
        <Breadcrumb className="hidden md:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-[12.5px] font-medium text-muted-foreground hover:text-foreground">
                {isRtl ? "الرئيسية" : "Workspace"}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="opacity-40" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[12.5px] font-semibold tracking-tight text-foreground">
                {isRtl ? "لوحة التحكم" : "Dashboard"}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex items-center gap-3">
        {/* Search Bar */}
        <div className="relative hidden w-64 md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground/50" />
          <Input
            type="search"
            placeholder={isRtl ? "بحث..." : "Search bar with auto-complete"}
            className="h-9 w-full rounded-lg bg-muted/40 pl-9 pr-4 text-[13px] border-border/50 focus-visible:ring-primary/20"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground md:hidden">
            <Search className="h-4 w-4" />
          </Button>
          
          <button
            onClick={() => onLocaleChange(locale === "en" ? "ar" : "en")}
            className="h-8 rounded-md px-2 text-[11px] font-bold tracking-tighter text-muted-foreground hover:bg-accent/50 hover:text-foreground transition-colors"
          >
            {isRtl ? "EN" : "AR"}
          </button>

          <ModeToggle />
          
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
            <Bell className="h-4 w-4" />
          </Button>
          
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}

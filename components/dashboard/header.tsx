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
import { cn } from "@/lib/utils"

interface HeaderProps {
  locale: "en" | "ar"
  onLocaleChange: (locale: "en" | "ar") => void
}

export function Header({ locale, onLocaleChange }: HeaderProps) {
  const isRtl = locale === "ar"

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border bg-background/95 px-6 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 md:px-10">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="-ml-1 text-muted-foreground transition-colors hover:text-foreground" />
        <div className="hidden h-6 w-[1px] bg-border/60 md:block" />
        <Breadcrumb className="hidden md:block">
          <BreadcrumbList className="gap-2">
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-[13px] font-semibold text-muted-foreground/60 transition-colors hover:text-foreground">
                {isRtl ? "بيئات العمل" : "Workspace"}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="opacity-50" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[13px] font-bold text-primary transition-all group-hover:scale-105">
                {isRtl ? "لوحة التحكم" : "Dashboard"}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative hidden w-72 md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/40" />
          <Input
            type="search"
            placeholder={isRtl ? "بحث..." : "Search..."}
            className="h-9 w-full rounded-xl bg-muted/60 pl-10 pr-4 text-[13px] font-medium border-border focus-visible:ring-0 transition-all placeholder:text-muted-foreground/30"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onLocaleChange(locale === "en" ? "ar" : "en")}
            className="h-9 px-3 text-[11px] font-bold tracking-widest text-muted-foreground/50 hover:bg-muted hover:text-foreground transition-all uppercase"
          >
            {isRtl ? "English" : "Arabic"}
          </Button>

          <div className="flex items-center gap-1 border-s border-border/50 ps-2">
            <ModeToggle />
            
            <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
              <Bell className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

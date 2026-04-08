"use client"

import * as React from "react"
import {
  Bell,
  CheckCircle2,
  Clock,
  Compass,
  Inbox,
  LayoutGrid,
  Search,
  Settings,
  Shield,
  Target,
  Users,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const data = {
  user: {
    name: "Indev-ui",
    email: "shrid@indev.com",
    avatar: "/avatars/user.jpg",
  },
  navMain: [
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "My issues",
      url: "#",
      icon: CheckCircle2,
    },
  ],
  workspace: [
    {
      title: "Teams",
      url: "#",
      icon: Target,
    },
    {
      title: "Projects",
      url: "#",
      icon: LayoutGrid,
    },
    {
      title: "Members",
      url: "#",
      icon: Users,
    },
    {
      title: "More",
      url: "#",
      icon: Compass,
    },
  ],
  teams: [
    {
      name: "LNDev Core",
      plan: "Pro",
    },
    {
      name: "Design System",
      plan: "Free",
    },
    {
      name: "Web Development",
      plan: "Enterprise",
    },
  ],
}

export function AppSidebar({ locale }: { locale: "en" | "ar" }) {
  const isRtl = locale === "ar"

  return (
    <Sidebar side={isRtl ? "right" : "left"} className="border-r border-border bg-sidebar">
      <SidebarHeader className="border-b border-border/50 px-4 py-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="hover:bg-accent/50">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xs shadow-sm">
                IN
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold tracking-tight">Indev-ui</span>
                <span className="truncate text-xs text-muted-foreground font-medium">Workspace</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    render={<a href={item.url} />}
                    tooltip={item.title}
                    className="px-3"
                  >
                    <item.icon className="size-4 opacity-70" />
                    <span className="font-medium text-[13px]">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="px-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/40">
            Workspace
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.workspace.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    render={<a href={item.url} />}
                    tooltip={item.title}
                    className="px-3"
                  >
                    <item.icon className="size-4 opacity-70" />
                    <span className="font-medium text-[13px]">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="px-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/50">
            Your teams
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.teams.map((team) => (
                <SidebarMenuItem key={team.name}>
                  <SidebarMenuButton size="sm" className="px-3">
                    <div className="flex aspect-square size-4 items-center justify-center rounded border border-border/50 bg-muted text-[10px] opacity-70">
                      {team.name[0]}
                    </div>
                    <span className="truncate font-medium">{team.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border/50 p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="hover:bg-accent/50">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={data.user.avatar} alt={data.user.name} />
                <AvatarFallback className="rounded-lg bg-orange-500/10 text-orange-500 font-bold text-xs">
                  S
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight ml-2">
                <span className="truncate font-semibold tracking-tight">Shrid</span>
                <span className="truncate text-xs text-muted-foreground font-medium leading-none mt-0.5">Admin</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

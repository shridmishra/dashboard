"use client"

import * as React from "react"
import {
  CheckCircle2,
  Compass,
  Inbox,
  LayoutGrid,
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
  useSidebar,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

const data = {
  user: {
    name: "Shrid Mishra",
    email: "shrid@indev.com",
    avatar: "/avatars/user.jpg",
  },
  navMain: [
    {
      titleEn: "Inbox",
      titleAr: "البريد الوارد",
      url: "#",
      icon: Inbox,
    },
    {
      titleEn: "My issues",
      titleAr: "قضاياي",
      url: "#",
      icon: CheckCircle2,
    },
  ],
  workspace: [
    {
      titleEn: "Teams",
      titleAr: "الفرق",
      url: "#",
      icon: Target,
    },
    {
      titleEn: "Projects",
      titleAr: "المشاريع",
      url: "#",
      icon: LayoutGrid,
    },
    {
      titleEn: "Members",
      titleAr: "الأعضاء",
      url: "#",
      icon: Users,
    },
    {
      titleEn: "More",
      titleAr: "المزيد",
      url: "#",
      icon: Compass,
    },
  ],
  teams: [
    {
      nameEn: "LNDev Core",
      nameAr: "نواة لن ديف",
      plan: "Pro",
    },
    {
      nameEn: "Design System",
      nameAr: "نظام التصميم",
      plan: "Free",
    },
    {
      nameEn: "Web Development",
      nameAr: "تطوير الويب",
      plan: "Enterprise",
    },
  ],
}

export function AppSidebar({ locale }: { locale: "en" | "ar" }) {
  const isRtl = locale === "ar"
  const [activeItem, setActiveItem] = React.useState("Inbox")
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <Sidebar collapsible="icon" side={isRtl ? "right" : "left"} className="border-r border-sidebar-border bg-background transition-colors duration-300">
      <SidebarHeader className={cn(
        "border-b border-border h-16 transition-all flex flex-col justify-center",
        isCollapsed ? "items-center p-0" : "p-5"
      )}>
        <SidebarMenu className={cn(isCollapsed && "items-center")}>
          <SidebarMenuItem>
            <SidebarMenuButton 
              size="lg" 
              className={cn(
                "active:scale-[0.98] rounded-xl transition-all",
                isCollapsed && "justify-center p-0!"
              )}
            >
              <div className="flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-black text-[10px] shadow-md ring-1 ring-primary/20">
                {isRtl ? "مو" : "IN"}
              </div>
              <div className={cn(
                "grid flex-1 text-left text-sm leading-tight transition-all",
                isCollapsed ? "hidden" : "ms-3"
              )}>
                <span className="truncate font-black tracking-tighter text-foreground">Indev-ui</span>
                <span className="truncate text-[11px] text-muted-foreground font-semibold opacity-50">
                  {isRtl ? "بيئة العمل" : "Workspace"}
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {isCollapsed && <div className="mx-3 h-px bg-border/60 my-2" />}

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className={cn(
              "transition-all",
              isCollapsed ? "gap-2 items-center" : "gap-1"
            )}>
              {data.navMain.map((item) => {
                const isActive = activeItem === item.titleEn
                return (
                  <SidebarMenuItem key={item.titleEn}>
                    <SidebarMenuButton 
                      isActive={isActive}
                      onClick={() => setActiveItem(item.titleEn)}
                      render={<a href={item.url} />}
                      tooltip={isRtl ? item.titleAr : item.titleEn}
                      className={cn(
                        "active:scale-[0.98] rounded-lg transition-all",
                        isCollapsed ? "justify-center p-0!" : "px-3 h-10",
                        isActive && "bg-primary/[0.06] text-foreground shadow-sm ring-1 ring-primary/10"
                      )}
                    >
                      <item.icon className={cn(
                        "shrink-0 transition-all",
                        isCollapsed ? "m-0" : "",
                        isActive ? "text-primary" : "text-muted-foreground/70"
                      )} />
                      <span className={cn(
                        "font-semibold tracking-tight transition-all",
                        isCollapsed ? "hidden" : "ml-2",
                        isActive ? "text-foreground" : "text-foreground/70"
                      )}>
                        {isRtl ? item.titleAr : item.titleEn}
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {isCollapsed && <div className="mx-3 h-px bg-border/60 my-4" />}

        <SidebarGroup>
          <SidebarGroupLabel className={isCollapsed ? "hidden" : ""}>
            {isRtl ? "بيئة العمل" : "Workspace"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className={cn(
              "transition-all",
              isCollapsed ? "gap-2 items-center" : "gap-1"
            )}>
              {data.workspace.map((item) => {
                const isActive = activeItem === item.titleEn
                return (
                  <SidebarMenuItem key={item.titleEn}>
                    <SidebarMenuButton 
                      isActive={isActive}
                      onClick={() => setActiveItem(item.titleEn)}
                      render={<a href={item.url} />}
                      tooltip={isRtl ? item.titleAr : item.titleEn}
                      className={cn(
                        "active:scale-[0.98] rounded-lg transition-all",
                        isCollapsed ? "justify-center p-0!" : "px-3 h-10",
                        isActive && "bg-primary/[0.06] text-foreground shadow-sm ring-1 ring-primary/10"
                      )}
                    >
                      <item.icon className={cn(
                        "shrink-0 transition-all",
                        isCollapsed ? "m-0" : "",
                        isActive ? "text-primary" : "text-muted-foreground/70"
                      )} />
                      <span className={cn(
                        "font-semibold tracking-tight transition-all",
                        isCollapsed ? "hidden" : "ml-2",
                        isActive ? "text-foreground" : "text-foreground/70"
                      )}>
                        {isRtl ? item.titleAr : item.titleEn}
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {isCollapsed && <div className="mx-3 h-px bg-border/60 my-4" />}

        <SidebarGroup className={isCollapsed ? "hidden" : ""}>
          <SidebarGroupLabel>
            {isRtl ? "الفرق" : "Teams"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {data.teams.map((team) => {
                const isActive = activeItem === team.nameEn
                return (
                  <SidebarMenuItem key={team.nameEn}>
                    <SidebarMenuButton 
                      isActive={isActive}
                      onClick={() => setActiveItem(team.nameEn)}
                      tooltip={isRtl ? team.nameAr : team.nameEn}
                      className={cn(
                        "active:scale-[0.98] rounded-lg transition-all",
                        isActive && "bg-primary/[0.06] shadow-sm ring-1 ring-primary/10"
                      )}
                    >
                      <div className={cn(
                        "flex aspect-square size-5 shrink-0 items-center justify-center rounded border text-[9px] font-black group-data-[collapsible=icon]/sidebar:size-6",
                        isActive ? "bg-primary/10 border-primary/30 text-primary" : "border-border/50 bg-muted/20 text-muted-foreground/50"
                      )}>
                        {(isRtl ? team.nameAr : team.nameEn)[0]}
                      </div>
                      <span className={cn(
                        "truncate font-semibold tracking-tight ml-3",
                        isActive ? "text-foreground" : "text-foreground/70"
                      )}>
                        {isRtl ? team.nameAr : team.nameEn}
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className={cn(
        "border-t border-sidebar-border bg-background transition-all overflow-hidden",
        isCollapsed ? "py-4 items-center" : "p-6"
      )}>
        <SidebarMenu className={cn(isCollapsed && "items-center")}>
          <SidebarMenuItem>
            <SidebarMenuButton 
              size="lg" 
              className={cn(
                "active:scale-[0.98] rounded-xl transition-all",
                isCollapsed && "justify-center p-0!"
              )}
            >
              <Avatar className="h-8 w-8 rounded-lg ring-2 ring-primary/5 shrink-0">
                <AvatarImage src={data.user.avatar} alt={data.user.name} />
                <AvatarFallback className="rounded-lg bg-orange-500/10 text-orange-600 font-black text-xs">
                  {isRtl ? "ش" : "S"}
                </AvatarFallback>
              </Avatar>
              <div className={cn(
                "grid flex-1 text-left text-sm leading-tight transition-all",
                isCollapsed ? "hidden" : "ms-3"
              )}>
                <span className="truncate font-black tracking-tighter text-foreground">Shrid Mishra</span>
                <span className="truncate text-[11px] text-muted-foreground font-semibold opacity-50 leading-none mt-0.5">
                  {isRtl ? "المدير العام" : "Administrator"}
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

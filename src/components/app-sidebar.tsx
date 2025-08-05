import * as React from "react"
import { Palette } from "lucide-react"
import Link from "next/link"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// Navigation data for template categories
const data = {
  navMain: [
    {
      title: "Components",
      url: "#",
      items: [
        {
          title: "Forms",
          url: "/forms",
          isActive: false,
        },
        {
          title: "Cards",
          url: "/cards",
          isActive: false,
        },
        {
          title: "Tables",
          url: "/tables",
          isActive: false,
        },
        {
          title: "Charts",
          url: "/charts",
          isActive: false,
        },
      ],
    },
    {
      title: "Templates",
      url: "#",
      items: [
        {
          title: "Email Templates",
          url: "/emails",
          isActive: false,
        },
        {
          title: "Dashboard Layouts",
          url: "/dashboards",
          isActive: false,
        },
        {
          title: "Authentication Pages",
          url: "/auth",
          isActive: false,
        },
        {
          title: "Landing Pages",
          url: "/landing",
          isActive: false,
        },
      ],
    },
    {
      title: "Examples",
      url: "#",
      items: [
        {
          title: "E-commerce",
          url: "/examples/ecommerce",
          isActive: false,
        },
        {
          title: "Marketing",
          url: "/examples/marketing",
          isActive: false,
        },
        {
          title: "SaaS",
          url: "/examples/saas",
          isActive: false,
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Palette className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Shadcn Templates</span>
                  <span className="text-xs">Component Library</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.url} className="font-medium">
                    {item.title}
                  </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <Link href={item.url}>{item.title}</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

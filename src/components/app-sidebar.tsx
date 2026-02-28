"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import {
  Home,
  CreditCard,
  List,
  ArrowLeftRight,
  Users,
  BarChart3,
} from "lucide-react"
import wiseLogo from "@/assets/wise-logo.svg"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const NAV_ITEMS = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/cards", icon: CreditCard, label: "Cards" },
  { href: "/transactions", icon: List, label: "Transactions" },
  { href: "/payments", icon: ArrowLeftRight, label: "Payments" },
  { href: "/recipients", icon: Users, label: "Recipients" },
  { href: "/insights", icon: BarChart3, label: "Insights" },
]

/**
 * DESIGNER NOTE: Wise-style app sidebar (left navigation)
 * — WISE logo centered at top, 40px gap, then pill-shaped nav items.
 * — To restyle: edit className on Sidebar, or override --sidebar-* in globals.css
 */
export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r-0! pt-16">
      <SidebarHeader className="items-center px-6 pb-0">
        <Image src={wiseLogo} alt="Wise" width={106} height={24} className="dark:brightness-0 dark:invert" />
      </SidebarHeader>
      <SidebarContent className="pt-10">
        <SidebarGroup className="px-6 py-4">
          <SidebarGroupContent>
            <SidebarMenu className="gap-0.5">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href)
                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      size="lg"
                      className="rounded-full gap-4 px-4 py-3 text-sm [&>svg]:size-6 data-[active=true]:font-semibold data-[active=true]:text-foreground font-normal text-muted-foreground"
                    >
                      <Link href={item.href}>
                        <item.icon />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

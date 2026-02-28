"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronRight, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

/**
 * DESIGNER NOTE: Wise-style top header
 * — Left: sidebar trigger + WISE logo. Right: Earn CTA + user profile (avatar, name, dropdown).
 * — Restyle: edit button variants, avatar size, or add --wise-* CSS variables in globals.css.
 */
export function AppHeader() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <header className="mt-16 shrink-0 bg-background">
      <div className="mx-auto flex h-14 max-w-[976px] items-center gap-4 px-6">
      <SidebarTrigger className="-ml-1" />
      <div className="flex flex-1" />
      <div className="flex items-center gap-2">
        <Button size="sm" className="rounded-full bg-primary text-primary-foreground transition-colors hover:bg-[#88d35e]">
          Earn $90
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="group/profile flex h-auto items-center gap-2 rounded-full py-1.5 pl-1 pr-4">
              <Avatar className="size-8">
                <AvatarImage src="" alt="Andy Weir" />
                <AvatarFallback className="bg-muted text-muted-foreground text-xs transition-colors group-hover/profile:brightness-95 dark:group-hover/profile:brightness-125">
                  AW
                </AvatarFallback>
              </Avatar>
              <span className="hidden text-sm font-medium sm:inline-block">
                Andy Weir
              </span>
              <ChevronRight className="size-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <span className="font-normal">Account</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
            >
              {resolvedTheme === "dark" ? (
                <>
                  <Sun className="mr-2 size-4" />
                  Light mode
                </>
              ) : (
                <>
                  <Moon className="mr-2 size-4" />
                  Dark mode
                </>
              )}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      </div>
    </header>
  )
}

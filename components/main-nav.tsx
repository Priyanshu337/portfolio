"use client"

import * as React from "react"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollTo = (nav: string) => {
    const section = document.querySelector(nav)
    section?.scrollIntoView({ behavior: "smooth", block: "start" })
    setMobileMenuOpen(false)
  }

  return (
    <div className="flex gap-2 md:gap-10">
      <Link href="/" className="flex items-center">
        <span className="text-sm font-bold sm:text-base">
          {siteConfig.name}
        </span>
      </Link>

      {/* Mobile menu button */}
      <button
        className="ml-auto block md:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? (
          <X className="h-5 w-5 sm:h-6 sm:w-6" />
        ) : (
          <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
        )}
      </button>

      {/* Desktop navigation */}
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  onClick={() => scrollTo(item.ref)}
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-lg font-extrabold text-muted-foreground hover:text-[#147efb] sm:text-sm",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}

      {/* Mobile navigation */}
      {mobileMenuOpen && items?.length ? (
        <div className="fixed inset-x-0 top-14 z-50 bg-background border-b p-3 sm:top-16 sm:p-4 md:hidden">
          <nav className="flex flex-col space-y-3 sm:space-y-4">
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    onClick={() => scrollTo(item.ref)}
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium text-muted-foreground hover:text-[#147efb] sm:text-base",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </nav>
        </div>
      ) : null}
    </div>
  )
}

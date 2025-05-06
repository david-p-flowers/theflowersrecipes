import Link from "next/link"
import { Search } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex-shrink-0">
          <Logo />
        </div>

        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-6 text-sm">
          <Link href="/recipes" className="font-medium transition-colors hover:text-primary">
            All Recipes
          </Link>
          <Link href="/categories/breakfast" className="font-medium transition-colors hover:text-primary">
            Breakfast
          </Link>
          <Link href="/categories/lunch" className="font-medium transition-colors hover:text-primary">
            Lunch
          </Link>
          <Link href="/categories/dinner" className="font-medium transition-colors hover:text-primary">
            Dinner
          </Link>
          <Link href="/categories/dessert" className="font-medium transition-colors hover:text-primary">
            Dessert
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/search">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

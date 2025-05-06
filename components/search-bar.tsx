"use client"

import { useRouter, usePathname } from "next/navigation"
import { useState, type FormEvent } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SearchBarProps {
  defaultValue?: string
}

export function SearchBar({ defaultValue = "" }: SearchBarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [query, setQuery] = useState(defaultValue)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Input
        type="search"
        placeholder="Search for delicious recipes..."
        className="w-full rounded-full border-flower-pink/20 pl-12 pr-4 py-6 text-base focus-visible:ring-flower-pink"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        type="submit"
        size="icon"
        variant="ghost"
        className="absolute left-0 top-0 h-full px-3 text-muted-foreground hover:text-flower-pink"
      >
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>
    </form>
  )
}

"use client"

import { useRouter, usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Check, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { getAllTags } from "@/lib/recipes"

interface RecipeFiltersProps {
  selectedCategory?: string
  selectedTags?: string[]
}

const CATEGORY_OPTIONS = ["breakfast", "lunch", "dinner", "dessert", "snack", "drink"]

export function RecipeFilters({ selectedCategory, selectedTags = [] }: RecipeFiltersProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [tags] = useState(getAllTags())
  const [selectedTagsState, setSelectedTagsState] = useState<string[]>(selectedTags)
  const [categoryOpen, setCategoryOpen] = useState(true)
  const [tagsOpen, setTagsOpen] = useState(true)

  useEffect(() => {
    setSelectedTagsState(selectedTags)
  }, [selectedTags])

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams()

    if (category !== selectedCategory) {
      params.set("category", category)
    }

    if (selectedTagsState.length > 0) {
      params.set("tags", selectedTagsState.join(","))
    }

    router.push(`${pathname}${params.toString() ? `?${params}` : ""}`)
  }

  const handleTagChange = (tag: string, checked: boolean) => {
    const newTags = checked
      ? [...selectedTagsState, tag]
      : selectedTagsState.filter((t) => t !== tag)

    setSelectedTagsState(newTags)

    const params = new URLSearchParams()
    if (selectedCategory) {
      params.set("category", selectedCategory)
    }
    if (newTags.length > 0) {
      params.set("tags", newTags.join(","))
    }

    router.push(`${pathname}${params.toString() ? `?${params}` : ""}`)
  }

  const clearFilters = () => {
    router.push(pathname)
  }

  const hasActiveFilters = selectedCategory || selectedTagsState.length > 0

  return (
    <div className="space-y-6 flower-card">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Filters</h2>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-flower-pink hover:text-flower-pink/80"
          >
            Clear all
          </Button>
        )}
      </div>

      <Collapsible open={categoryOpen} onOpenChange={setCategoryOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="flex w-full justify-between p-0 font-bold">
            Categories
            <ChevronDown className={`h-4 w-4 transition-transform ${categoryOpen ? "rotate-180" : ""}`} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4 space-y-1">
          {CATEGORY_OPTIONS.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Button
                variant={category === selectedCategory ? "default" : "ghost"}
                size="sm"
                className={`justify-start w-full rounded-full ${
                  category === selectedCategory ? "bg-flower-pink hover:bg-flower-pink/90" : ""
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category === selectedCategory && <Check className="mr-2 h-4 w-4" />}
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={tagsOpen} onOpenChange={setTagsOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="flex w-full justify-between p-0 font-bold">
            Tags
            <ChevronDown className={`h-4 w-4 transition-transform ${tagsOpen ? "rotate-180" : ""}`} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4 space-y-3">
          {tags.map((tag) => {
            const tagName = tag
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")

            return (
              <div key={tag} className="flex items-center space-x-2">
                <Checkbox
                  id={`tag-${tag}`}
                  checked={selectedTagsState.includes(tag)}
                  onCheckedChange={(checked) => handleTagChange(tag, checked as boolean)}
                  className="border-flower-pink/50 data-[state=checked]:bg-flower-pink data-[state=checked]:border-flower-pink"
                />
                <label
                  htmlFor={`tag-${tag}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {tagName}
                </label>
              </div>
            )
          })}
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

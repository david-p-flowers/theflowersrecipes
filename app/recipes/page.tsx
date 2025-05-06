import { Suspense } from "react"
import { RecipeFilters } from "@/components/recipe-filters"
import { RecipeGrid } from "@/components/recipe-grid"
import { SearchBar } from "@/components/search-bar"
import { Skeleton } from "@/components/ui/skeleton"
import { DecorativeFlower } from "@/components/decorative-flower"

export default function RecipesPage({
  searchParams,
}: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const category = typeof searchParams.category === "string" ? searchParams.category : undefined
  const tags =
    typeof searchParams.tags === "string"
      ? searchParams.tags.split(",")
      : Array.isArray(searchParams.tags)
        ? searchParams.tags
        : []

  return (
    <div className="relative container mx-auto px-4 py-8">
      {/* Decorative elements */}
      <DecorativeFlower size="lg" color="pink" className="-top-16 -right-16 opacity-10" />
      <DecorativeFlower size="md" color="purple" className="top-1/3 -left-12 opacity-10" />
      <DecorativeFlower size="sm" color="green" className="bottom-1/4 right-0 opacity-10" />

      <h1 className="text-4xl font-bold mb-8 text-center">
        <span className="text-flower-pink">Blooming</span> Recipes
      </h1>

      <div className="mb-8">
        <SearchBar />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <RecipeFilters selectedCategory={category} selectedTags={tags} />
        </div>
        <div className="md:col-span-3">
          <Suspense fallback={<RecipeGridSkeleton />}>
            <RecipeGrid category={category} tags={tags} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

function RecipeGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="flower-card border-none overflow-hidden">
            <Skeleton className="h-48 w-full rounded-xl" />
            <div className="p-4">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        ))}
    </div>
  )
}

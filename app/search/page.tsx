import { Suspense } from "react"
import { SearchResults } from "@/components/search-results"
import { SearchBar } from "@/components/search-bar"
import { Skeleton } from "@/components/ui/skeleton"
import { DecorativeFlower } from "@/components/decorative-flower"

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q || ""

  return (
    <div className="relative container mx-auto px-4 py-8">
      {/* Decorative elements */}
      <DecorativeFlower size="lg" color="pink" className="-top-16 -right-16 opacity-10" />
      <DecorativeFlower size="md" color="purple" className="top-1/3 -left-12 opacity-10" />

      <h1 className="text-4xl font-bold mb-8 text-center">
        <span className="text-flower-pink">Search</span> Results
      </h1>

      <div className="mb-8 max-w-3xl mx-auto">
        <SearchBar defaultValue={query} />
      </div>

      <div className="max-w-4xl mx-auto">
        {query ? (
          <Suspense fallback={<SearchResultsSkeleton />}>
            <SearchResults query={query} />
          </Suspense>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Enter a search term to find recipes</p>
          </div>
        )}
      </div>
    </div>
  )
}

function SearchResultsSkeleton() {
  return (
    <div className="space-y-4">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="flower-card border-none p-4">
            <Skeleton className="h-6 w-1/3 mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ))}
    </div>
  )
}

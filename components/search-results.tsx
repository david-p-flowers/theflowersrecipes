import Link from "next/link"
import Image from "next/image"
import { searchRecipes } from "@/lib/recipes"
import { Badge } from "@/components/ui/badge"

interface SearchResultsProps {
  query: string
}

export function SearchResults({ query }: SearchResultsProps) {
  const results = searchRecipes(query)

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No recipes found matching "{query}"</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        Found {results.length} results for "{query}"
      </p>

      {results.map((recipe) => (
        <div key={recipe.slug} className="flower-card group overflow-hidden border-none">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <Link href={`/recipes/${recipe.slug}`} className="block">
                <div className="aspect-square relative overflow-hidden rounded-xl">
                  <Image
                    src={recipe.imageUrl || `/placeholder.svg?height=300&width=500&text=${encodeURIComponent(recipe.title)}`}
                    alt={recipe.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
            </div>
            <div className="md:col-span-3 pt-6 md:pt-4">
              <Link href={`/recipes/${recipe.slug}`} className="block">
                <h3 className="text-xl font-bold mb-2 group-hover:text-flower-pink transition-colors">
                  {recipe.title}
                </h3>
              </Link>
              <p className="text-muted-foreground mb-4">{recipe.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {recipe.tags.map((tag) => (
                  <Link href={`/recipes?tags=${tag}`} key={tag}>
                    <Badge
                      variant="secondary"
                      className="cursor-pointer rounded-full hover:bg-flower-pink/10 hover:text-flower-pink transition-colors"
                    >
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                {recipe.totalTime} | {recipe.servings}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

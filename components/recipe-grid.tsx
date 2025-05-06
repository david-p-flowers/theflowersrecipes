import Link from "next/link"
import Image from "next/image"
import { getFilteredRecipes } from "@/lib/recipes"
import { Badge } from "@/components/ui/badge"

interface RecipeGridProps {
  category?: string
  tags?: string[]
}

export function RecipeGrid({ category, tags = [] }: RecipeGridProps) {
  const recipes = getFilteredRecipes({ category, tags })

  if (recipes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No recipes found matching your criteria</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div key={recipe.slug} className="flower-card group overflow-hidden border-none">
          <Link href={`/recipes/${recipe.slug}`} className="block">
            {/* <div className="aspect-video relative overflow-hidden rounded-xl">
              <Image
                src={`/placeholder.svg?height=300&width=500&text=${encodeURIComponent(recipe.title)}`}
                alt={recipe.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
            </div> */}
          </Link>
          <div className="pt-6">
            <Link href={`/recipes/${recipe.slug}`} className="block">
              <h3 className="text-xl font-bold mb-2 group-hover:text-flower-pink transition-colors">{recipe.title}</h3>
            </Link>
            <p className="text-muted-foreground line-clamp-2 mb-4">{recipe.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {recipe.tags.slice(0, 3).map((tag) => (
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
            <div className="text-sm text-muted-foreground">
              {recipe.totalTime} | {recipe.servings}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

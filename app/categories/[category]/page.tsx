import { notFound } from "next/navigation"
import { Suspense } from "react"
import { RecipeGrid } from "@/components/recipe-grid"
import { SearchBar } from "@/components/search-bar"
import { Skeleton } from "@/components/ui/skeleton"
import { getAllCategories } from "@/lib/recipes"
import { DecorativeFlower } from "@/components/decorative-flower"

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((category) => ({ category }))
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category
  const categoryName = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  // Check if category exists
  if (!getAllCategories().includes(category)) {
    notFound()
  }

  // Get emoji for category
  const categoryEmojis: Record<string, string> = {
    breakfast: "🍳",
    lunch: "🥪",
    dinner: "🍽️",
    dessert: "🍰",
    snack: "🍿",
    "gluten-free": "🌾",
    "dairy-free": "🥛",
    vegetarian: "🥗",
    vegan: "🌱",
  }

  const emoji = categoryEmojis[category] || "🌸"

  return (
    <div className="relative container mx-auto px-4 py-8">
      {/* Decorative elements */}
      <DecorativeFlower size="lg" color="pink" className="-top-16 -right-16 opacity-10" />
      <DecorativeFlower size="md" color="purple" className="top-1/3 -left-12 opacity-10" />
      <DecorativeFlower size="sm" color="green" className="bottom-1/4 right-0 opacity-10" />

      <div className="text-center mb-8">
        <div className="text-4xl mb-4 inline-block">{emoji}</div>
        <h1 className="text-4xl font-bold">
          <span className="text-flower-pink">{categoryName}</span> Recipes
        </h1>
      </div>

      <div className="mb-8 max-w-3xl mx-auto">
        <SearchBar />
      </div>

      <Suspense fallback={<CategorySkeleton />}>
        <RecipeGrid category={category} />
      </Suspense>
    </div>
  )
}

function CategorySkeleton() {
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

import Link from "next/link"
import { getAllCategories } from "@/lib/recipes"

export function CategoryGrid() {
  const categories = getAllCategories()

  // Icons for categories (using emoji for simplicity)
  const categoryIcons: Record<string, string> = {
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

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {categories.map((category) => {
        const categoryName = category
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")

        return (
          <Link href={`/categories/${category}`} key={category}>
            <div className="flower-card group flex flex-col items-center justify-center py-6 text-center transition-all hover:-translate-y-1">
              <div className="mb-3 text-4xl">{categoryIcons[category] || "🌸"}</div>
              <h3 className="font-medium group-hover:text-flower-pink transition-colors">{categoryName}</h3>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

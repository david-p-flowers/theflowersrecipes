import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Clock, Users, Tag } from "lucide-react"

import { getRecipeBySlug, getAllRecipeSlugs } from "@/lib/recipes"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { DecorativeFlower } from "@/components/decorative-flower"

export async function generateStaticParams() {
  const slugs = getAllRecipeSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = getRecipeBySlug(params.slug)

  if (!recipe) {
    notFound()
  }

  return (
    <div className="relative container mx-auto px-4 py-8">
      {/* Decorative elements */}
      <DecorativeFlower size="lg" color="pink" className="-top-16 -right-16 opacity-10" />
      <DecorativeFlower size="sm" color="purple" className="top-1/3 -left-12 opacity-10" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <Link
              href="/recipes"
              className="text-flower-pink hover:text-flower-pink/80 hover:underline mb-4 inline-flex items-center"
            >
              ← Back to recipes
            </Link>
            <h1 className="text-4xl font-bold mb-2">{recipe.title}</h1>
            <p className="text-muted-foreground text-lg mb-4">{recipe.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {recipe.tags.map((tag) => (
                <Link href={`/recipes?tags=${tag}`} key={tag}>
                  <Badge
                    variant="secondary"
                    className="cursor-pointer rounded-full hover:bg-flower-pink/10 hover:text-flower-pink transition-colors"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-flower-pink" />
                <span>Prep: {recipe.prepTime}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-flower-purple" />
                <span>Cook: {recipe.cookTime}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-flower-green" />
                <span>Total: {recipe.totalTime}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1 text-flower-yellow" />
                <span>{recipe.servings}</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src={recipe.imageUrl || `/placeholder.svg?height=300&width=500&text=${encodeURIComponent(recipe.title)}`}
                alt={recipe.title}
                width={800}
                height={600}
                className="rounded-xl object-cover w-full aspect-video"
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="flower-card border-none">
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4 text-flower-pink">Ingredients</h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block h-2 w-2 rounded-full bg-flower-pink mt-2 mr-2"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {recipe.notes && (
              <Card className="flower-card border-none">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-bold mb-4 text-flower-purple">Notes</h2>
                  <p>{recipe.notes}</p>
                </CardContent>
              </Card>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-flower-green">Instructions</h2>
            <ol className="space-y-6">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-flower-green text-white font-bold mr-4">
                    {index + 1}
                  </span>
                  <p className="pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* <div className="lg:col-span-1">
          <div className="sticky top-8">
            <Card className="flower-card border-none">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-4 text-flower-purple">You might also like</h3>
                <div className="space-y-4">
                  <div className="group flex gap-3">
                    <div className="h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
                      <div className="w-full h-full bg-muted flex items-center justify-center text-2xl">🍰</div>
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-flower-pink transition-colors">
                        Vegan Chocolate Cake
                      </h4>
                      <p className="text-xs text-muted-foreground">Dessert • 45 minutes</p>
                    </div>
                  </div>

                  <div className="group flex gap-3">
                    <div className="h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
                      <div className="w-full h-full bg-muted flex items-center justify-center text-2xl">🥗</div>
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-flower-pink transition-colors">Summer Salad</h4>
                      <p className="text-xs text-muted-foreground">Lunch • 15 minutes</p>
                    </div>
                  </div>

                  <div className="group flex gap-3">
                    <div className="h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
                      <div className="w-full h-full bg-muted flex items-center justify-center text-2xl">🍲</div>
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-flower-pink transition-colors">
                        Hearty Vegetable Soup
                      </h4>
                      <p className="text-xs text-muted-foreground">Dinner • 40 minutes</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6">
              <Card className="flower-card border-none">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-4 text-flower-pink">Share this recipe</h3>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-flower-pink/10 transition-colors">
                      <span className="sr-only">Share on Facebook</span>📱
                    </button>
                    <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-flower-pink/10 transition-colors">
                      <span className="sr-only">Share on Twitter</span>📱
                    </button>
                    <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-flower-pink/10 transition-colors">
                      <span className="sr-only">Share on Pinterest</span>📱
                    </button>
                    <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-flower-pink/10 transition-colors">
                      <span className="sr-only">Share via Email</span>📧
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

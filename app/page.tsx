import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FeaturedRecipes } from "@/components/featured-recipes"
import { CategoryGrid } from "@/components/category-grid"
import { SearchBar } from "@/components/search-bar"
import { DecorativeFlower } from "@/components/decorative-flower"

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative elements */}
      <DecorativeFlower size="lg" color="pink" className="-top-16 -right-16" />
      <DecorativeFlower size="md" color="purple" className="top-1/3 -left-12" />
      <DecorativeFlower size="sm" color="green" className="bottom-1/4 right-0" />
      <DecorativeFlower size="md" color="yellow" className="-bottom-16 left-1/4" />

      <div className="container relative mx-auto px-4 py-8">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-block rounded-full bg-flower-pink/10 px-3 py-1 text-sm font-medium text-flower-pink">
              David & Ashleigh
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              The <span className="text-flower-pink">Flowers</span> Recipes
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Find and filter through the recipes we use in our every day life.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild className="petal-button" size="lg">
                <Link href="/recipes">
                  Browse Recipes <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/categories/gluten-free">Gluten-Free Recipes</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="mx-auto max-w-5xl">
            <SearchBar />
          </div>
        </section>

        {/* <section className="py-8 md:py-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">
              <span className="text-flower-pink">Blooming</span> Categories
            </h2>
            <CategoryGrid />
          </div>
        </section> */}

        {/* <div className="petal-divider"></div> */}

        <section className="py-8 md:py-12">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold tracking-tight">
                <span className="text-flower-purple">Featured</span> Recipes
              </h2>
              <Button asChild variant="ghost" className="gap-1">
                <Link href="/recipes">
                  View all <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <FeaturedRecipes />
          </div>
        </section>
      </div>
    </div>
  )
}

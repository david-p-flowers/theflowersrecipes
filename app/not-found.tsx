import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DecorativeFlower } from "@/components/decorative-flower"

export default function NotFound() {
  return (
    <div className="relative container flex flex-col items-center justify-center min-h-[70vh] px-4 py-8 text-center">
      {/* Decorative elements */}
      <DecorativeFlower size="lg" color="pink" className="-top-16 -right-16" />
      <DecorativeFlower size="md" color="purple" className="bottom-1/4 -left-12" />

      <div className="text-6xl mb-6">🥀</div>
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Recipe Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        We couldn't find the recipe you were looking for. It might have been removed or the URL might be incorrect.
      </p>
      <Button asChild className="petal-button">
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}

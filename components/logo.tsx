import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2">
      <div className="relative flex h-10 w-10 items-center justify-center">
        <span className="text-2xl">🌸</span>
      </div>
      <span className="font-display text-2xl font-bold tracking-tight text-flower-pink">
        The Flowers <span className="text-flower-purple">Recipes</span>
      </span>
    </Link>
  )
}

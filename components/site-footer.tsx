import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} The Flowers Recipes. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

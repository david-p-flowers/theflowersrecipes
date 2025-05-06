export function DecorativeFlower({
  className = "",
  size = "md",
  color = "pink",
}: {
  className?: string
  size?: "sm" | "md" | "lg"
  color?: "pink" | "purple" | "green" | "yellow"
}) {
  const sizeClasses = {
    sm: "h-16 w-16",
    md: "h-24 w-24",
    lg: "h-32 w-32",
  }

  const colorClasses = {
    pink: "text-flower-pink",
    purple: "text-flower-purple",
    green: "text-flower-green",
    yellow: "text-flower-yellow",
  }

  return (
    <div className={`absolute opacity-20 ${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
      <div className="absolute inset-0 animate-spin-slow">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 10C55.5 10 60 14.5 60 20C60 25.5 55.5 30 50 30C44.5 30 40 25.5 40 20C40 14.5 44.5 10 50 10Z"
            fill="currentColor"
          />
          <path
            d="M70 30C75.5 30 80 34.5 80 40C80 45.5 75.5 50 70 50C64.5 50 60 45.5 60 40C60 34.5 64.5 30 70 30Z"
            fill="currentColor"
          />
          <path
            d="M50 70C55.5 70 60 65.5 60 60C60 54.5 55.5 50 50 50C44.5 50 40 54.5 40 60C40 65.5 44.5 70 50 70Z"
            fill="currentColor"
          />
          <path
            d="M30 30C35.5 30 40 34.5 40 40C40 45.5 35.5 50 30 50C24.5 50 20 45.5 20 40C20 34.5 24.5 30 30 30Z"
            fill="currentColor"
          />
          <circle cx="50" cy="40" r="10" fill="currentColor" />
        </svg>
      </div>
    </div>
  )
}

import type { ButtonHTMLAttributes } from "react"
import Link from "next/link"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  href?: string
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "rounded-full font-medium transition-colors duration-300 inline-flex items-center justify-center"

  const variants = {
    primary: "bg-elgin-blue text-white hover:bg-elgin-dark-blue",
    secondary: "bg-white text-elgin-blue hover:bg-gray-100",
    outline: "bg-transparent border border-elgin-blue text-elgin-blue hover:bg-elgin-blue hover:text-white",
  }

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "px-6 py-3",
    lg: "text-lg px-8 py-4",
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}


import type React from "react"
interface VisuallyHiddenProps {
  children: React.ReactNode
}

export default function VisuallyHidden({ children }: VisuallyHiddenProps) {
  return <span className="absolute w-px h-px p-0 -m-1 overflow-hidden clip whitespace-nowrap border-0">{children}</span>
}


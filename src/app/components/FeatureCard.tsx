"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const [, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 card-hover transition-transform"
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-4">
        <div className="bg-elgin-blue bg-opacity-10 p-3 rounded-full mr-4">
          <Image src={icon} alt={title} width={24} height={24} />
        </div>
        <h3 className="text-xl font-semibold text-elgin-blue">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

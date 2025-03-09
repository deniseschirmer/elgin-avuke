// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"

// interface AnimatedIconProps {
//   src: string
//   alt?: string
//   size?: number
//   delay?: number
// }

// export default function AnimatedIcon({ src, alt = "", size = 48, delay = 0 }: AnimatedIconProps) {
//   return (
//     <motion.div
//       animate={{ y: [0, -10, 0] }}
//       transition={{
//         repeat: Number.POSITIVE_INFINITY,
//         duration: 3,
//         delay: delay,
//         ease: "easeInOut",
//       }}
//     >
//       <Image src={src || "/placeholder.svg"} alt={alt} width={size} height={size} />
//     </motion.div>
//   )
// }


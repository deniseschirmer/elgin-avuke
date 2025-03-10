"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className=""
    >
      <Image
        src="/assets/images/hero-person.svg"
        alt="Pessoa usando laptop"
        width={447}
        height={873}
        className=""
      />
    </motion.div>
  );
}
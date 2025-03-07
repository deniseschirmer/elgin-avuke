"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="bg-elgin-blue text-white overflow-hidden relative">
      <div className="container-custom py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Bem-vindo ao Clube{" "}
              <span className="inline-block">
                <Image
                  src="/images/elgin-logo-white.svg"
                  alt="Elgin"
                  width={120}
                  height={40}
                  className="inline-block"
                />
              </span>
            </h1>
            <p className="text-lg mb-6">
              Agora que você já conhece o nosso programa de incentivos, chegou o momento de aproveitar todas as
              vantagens que o Clube Elgin oferece.
            </p>
            <p className="text-lg mb-8">
              Estamos aqui para{" "}
              <strong>
                reconhecer seus talentos e transformar suas vendas em benefícios e experiências exclusivas.
              </strong>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/images/hero-person.png"
              alt="Pessoa usando laptop"
              width={600}
              height={500}
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <Image src="/images/hero-decoration.svg" alt="" fill className="object-cover opacity-20" />
      </div>

      {/* Icons */}
      <motion.div
        className="absolute top-1/4 left-10 w-12 h-12"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
      >
        <Image src="/images/icon-chart.svg" alt="" width={48} height={48} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-10 w-12 h-12"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, delay: 1 }}
      >
        <Image src="/images/icon-bag.svg" alt="" width={48} height={48} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-12 h-12"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, delay: 0.5 }}
      >
        <Image src="/images/icon-coin.svg" alt="" width={48} height={48} />
      </motion.div>
    </section>
  )
}


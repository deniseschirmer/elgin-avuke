"use client"

import Image from "next/image"

import Header from "./Header"

export default function Hero() {
  return (
    <section className="bg-blue-gradient text-white overflow-hidden relative">
      <Header />
      <div className="flex items-center justify-center py-16 md:py-24 relative z-10">
        <div className="absolute inset-0 -z-10">
          <Image src="/assets/images/ilustra.svg" alt="ilustração" fill className="object-cover" />
        </div>
        <div className="bg-black rounded-lg p-6 max-w-2xl text-center">
          <h1 className="text-2xl  mb-4">
            Bem-vindo ao Clube {" "}
            <Image
              src="/assets/images/logo-white.svg"
              alt="Elgin"
              width={120}
              height={40}
              className="inline-block"
            />
          </h1>
          <p className="text-sm md:text-base mb-6">
            Agora que você já conhece o nosso programa de incentivos, chegou o momento de aproveitar todas as
            vantagens que o Clube Elgin oferece.
          </p>
          <p className="text-lg">
            Estamos aqui para {" "}
            <strong>reconhecer seus talentos e transformar suas vendas em benefícios e experiências exclusivas.</strong>
          </p>
        </div>
      </div>

      {/* Ícones decorativos animados
      {[
        { src: "/images/icon-chart.svg", className: "top-1/4 left-10" },
        { src: "/images/icon-bag.svg", className: "bottom-1/4 right-10", delay: 1 },
        { src: "/images/icon-coin.svg", className: "bottom-1/3 left-1/4", delay: 0.5 }
      ].map(({ src, className, delay = 0 }, index) => (
        <motion.div
          key={index}
          className={`absolute w-12 h-12 ${className}`}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay }}
        >
          <Image src={src} alt="" width={48} height={48} />
        </motion.div>
      ))} */}
    </section>
  )
}

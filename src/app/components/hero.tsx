"use client"

import Image from "next/image"

import Header from "./Header"

export default function Hero() {
  return (
    <section className="bg-blue-gradient text-white overflow-hidden relative">
      <Header />
      <div className="flex items-center justify-center py-16 md:py-24 relative z-10">
        <div className="absolute inset-0 -z-10">
          <Image src="/assets/images/ilustra.svg" alt="ilustração" fill className="object-contain"  />
        </div>
        <div className="bg-black text-white p-10 rounded-[42px] text-left w-full max-w-[1130px]">
          <h1 className="text-4xl font-thin">
            Bem-vindo ao Clube
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-VnPynLJ8Y1d5WbQIUM5VLT87uB70IB.png"
              alt="Elgin"
              width={180}
              height={60}
              className="inline-block ml-2"
            />
          </h1>
          <p className="mt-4 font-light max-w-[550px]">
            Agora que você já conhece o nosso programa de incentivos, chegou o momento de aproveitar todas as
            vantagens que o Clube Elgin oferece. Estamos aqui para
            <span className="font-semibold"> reconhecer seu talento e transformar suas vendas em benefícios e experiências exclusivas.</span>
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

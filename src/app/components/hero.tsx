"use client";

import Image from "next/image";
import Header from "./Header";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="bg-blue-gradient text-white overflow-hidden relative">
      <Header />
      <div className="flex items-center justify-center py-16 md:py-24 relative z-10">
        {/* Imagem de fundo */}
        <div className="absolute inset-0 -z-10">
          <Image src="/assets/images/ilustra.svg" alt="ilustração" fill className="object-contain" />
        </div>

        {/* Div com bg-black */}
        <div className="bg-black text-white p-10 rounded-[42px] text-left w-full max-w-[1130px] relative">
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

        {/* HeroImage posicionada para se estender para o HowItWorks */}
        <div className="absolute bottom-[-50px] right-0 z-20"> {/* Ajuste o bottom conforme necessário */}
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
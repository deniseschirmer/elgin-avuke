"use client"
import Link from "next/link";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-5">
        <div className="relative flex flex-col sm:flex-row  bg-black text-white p-10 rounded-[42px] text-left w-full max-w-[1130px] h-[343px] mx-auto justify-around">
          <div className="flex flex-col flex-wrap justify-around">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-0">
              Cadastre-se e <br/><span className="text-primary font-bold">Comece Agora!</span>
            </h2>
            <Link
              href="#"
              className="bg-primary text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 mt-4 max-w-[312px] h-[33px]"
            >
              <span className="font-bold text-sm sm:text-base md:text-lg">Acesse seu cadastro aqui</span>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.2726 2.92725V11.9747H12.9393V5.20341L3.73661 14.4059L2.79395 13.4632L11.9966 4.26041L5.22511 4.26058V2.92725H14.2726Z"
                  fill="white"
                />
              </svg>
            </Link>
            <p className="text-sm sm:text-base mt-2">
              Já é cadastrado? <Link href="#" className="border-b-2 border-gray-300">Acesse seu portal aqui</Link>
            </p>
          </div>
          <div className="max-w-[400px] mt-8 md:mt-0">
            <p className="font-font-visby-thin text-sm sm:text-base md:text-lg">
              Não perca a oportunidade de transformar suas vendas em benefícios tangíveis. Cadastre-se no Clube Elgin+
              hoje mesmo e inicie sua jornada rumo ao sucesso, com o reconhecimento que você merece.
            </p>
            <div className="">
              <Image 
                src="/assets/images/ellipse.svg" 
                alt="Eclipse" 
                width={278} 
                height={122} 
                layout="intrinsic" 
                className="absolute bottom-0 right-0 z-10" 
              />
            </div>
          </div>
        </div>
      </div>
      <h4 className="mt-[40px] mx-auto mb-0 text-[rgb(34,34,34)] font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl leading-[28px] text-center max-w-[1116px] px-5">
        O<span className="text-[#0099FF] font-bold"> Clube Elgin+ </span>
        está pronto para impulsionar sua trajetória de vendas e premiar suas conquistas. Estamos ao seu lado para
        alcançar novos patamares.
      </h4>
    </section>
  );
}

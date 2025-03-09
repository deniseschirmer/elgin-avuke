"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <motion.div
      className="bg-primary text-white rounded-[30px] p-8 text-center transition-transform duration-300 hover:-translate-y-2"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex justify-center mb-4">
        <Image
          src={icon || "/placeholder.svg"}
          alt={title}
          width={50}
          height={50}
          className="w-[50px] h-[50px]"
        />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="font-light">{description}</p>
    </motion.div>
  );
}

export default function Benefits() {
  return (
    <section className="relative">
      {/* Parte Preta (60% da altura) */}
      <div className="bg-black py-16" style={{ height: "50vh" }}>

        <div className="container mx-auto px-5">
          <h2 className="text-5xl text-primary font-thin text-center mb-12">
            Benefícios <span className="text-white font-bold">Exclusivos</span> para Você
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard
              icon="/assets/images/star.svg"
              title="Cashback"
              description="Troque seus pontos por créditos em compras futuras, obtendo ainda mais economia em suas compras."
            />
            <BenefitCard
              icon="/assets/images/star.svg"
              title="Descontos Especiais"
              description="Acesse descontos exclusivos em produtos Elgin e de parceiros selecionados."
            />
            <BenefitCard
              icon="/assets/images/star.svg"
              title="Prêmios de Alta Qualidade"
              description="Escolha entre uma variedade de prêmios, desde produtos Elgin até experiências únicas."
            />
            <BenefitCard
              icon="/assets/images/star.svg"
              title="Treinamentos Exclusivos"
              description="Acesse treinamentos especializados para desenvolvimento profissional. Destaque-se no mercado."
            />
          </div>
        </div>
      </div>

      {/* Parte Branca (40% da altura) */}
      <div className="bg-white" style={{ height: "50vh"}}></div>
    </section>
  );
}
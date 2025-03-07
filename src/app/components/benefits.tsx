"use client"
import Image from "next/image"
import { motion } from "framer-motion"

interface BenefitCardProps {
  icon: string
  title: string
  description: string
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <motion.div
      className="bg-elgin-blue text-white rounded-lg p-6 card-hover"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex justify-center mb-4">
        <div className="text-white">
          <Image src={icon || "/placeholder.svg"} alt="" width={32} height={32} />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-center mb-3">{title}</h3>
      <p className="text-center text-sm">{description}</p>
    </motion.div>
  )
}

export default function Benefits() {
  return (
    <section className="section-spacing bg-black text-white">a
      <div className="container-custom">
        <h2 className="section-title text-center">
          <span className="text-elgin-blue">Benefícios</span> Exclusivos{" "}
          <span className="text-elgin-blue">para Você</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <BenefitCard
            icon="/images/icon-star.svg"
            title="Cashback:"
            description="Troque seus pontos por créditos em compras futuras, obtendo ainda mais economia em suas compras."
          />

          <BenefitCard
            icon="/images/icon-star.svg"
            title="Descontos Especiais:"
            description="Acesse descontos exclusivos em produtos Elgin e de parceiros selecionados."
          />

          <BenefitCard
            icon="/images/icon-star.svg"
            title="Prêmios de Alta Qualidade:"
            description="Escolha entre uma variedade de prêmios, desde produtos Elgin até experiências únicas."
          />

          <BenefitCard
            icon="/images/icon-star.svg"
            title="Treinamentos Exclusivos:"
            description="Acesse treinamentos especializados para desenvolvimento profissional Destaque-se no mercado."
          />
        </div>
      </div>
    </section>
  )
}


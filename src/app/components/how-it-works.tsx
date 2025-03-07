"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 card-hover"
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-4">
        <div className="bg-elgin-blue bg-opacity-10 p-3 rounded-full mr-4">
          <Image src={icon || "/placeholder.svg"} alt="" width={24} height={24} />
        </div>
        <h3 className="text-xl font-semibold text-elgin-blue">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

export default function HowItWorks() {
  return (
    <section className="section-spacing bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Como Funciona?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A cada venda realizada, você acumula pontos que podem ser utilizados para resgatar prêmios e recompensas.
            Esses pontos podem ser somados ao longo do ano, especialmente durante campanhas sazonais para potencializar
            ainda mais suas conquistas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <FeatureCard
            icon="/images/icon-calendar.svg"
            title="Campanhas Sazonais:"
            description="Durante o ano, lançamos campanhas específicas que permitem acumular pontos promocionais. Aproveite essas oportunidades para maximizar suas recompensas."
          />

          <FeatureCard
            icon="/images/icon-target.svg"
            title="Desafios Personalizados:"
            description="Participe de desafios que estimulam seu desempenho e alcance metas reais. Desbloquearemos recompensas diferenciadas."
          />
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/images/how-it-works-image.png"
              alt="Pessoa trabalhando"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Acompanhe seu progresso</h3>
            <p className="text-gray-600 mb-6">
              Nosso sistema intuitivo permite que você acompanhe seus pontos em tempo real, visualize metas e desafios
              disponíveis, e escolha as recompensas que mais combinam com você.
            </p>
            <ul className="space-y-3">
              {[
                "Acumule pontos a cada venda registrada",
                "Participe de campanhas exclusivas",
                "Resgate prêmios e benefícios exclusivos",
                "Acompanhe seu desempenho em tempo real",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-elgin-blue mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}


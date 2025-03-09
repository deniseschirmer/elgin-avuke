"use client"

import FeatureCard from "./FeatureCard"


export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Como Funciona?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            A cada venda realizada, você acumula pontos que podem ser utilizados para resgatar prêmios e recompensas.
            Esses pontos podem ser somados ao longo do ano, especialmente durante campanhas sazonais para potencializar
            ainda mais suas conquistas.
          </p>
          {/* <HeroImage /> */}
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
            <h3 className="text-2xl font-bold mb-4">Acompanhe seu progresso</h3>
            <p className="text-gray-600 mb-6">
              Nosso sistema intuitivo permite que você acompanhe seus pontos em tempo real, visualize metas e desafios
              disponíveis, e escolha as recompensas que mais combinam com você.
            </p>
            <ul className="space-y-3">
              {["Acumule pontos a cada venda registrada", "Participe de campanhas exclusivas", "Resgate prêmios e benefícios exclusivos", "Acompanhe seu desempenho em tempo real"].map((item, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="text-blue-500 mr-2">✓</span>
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
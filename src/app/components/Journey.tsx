"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Journey() {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">
              Sua Jornada, <span className="text-elgin-blue">Seus Resultados</span>
            </h2>
            <p className="text-gray-600 mb-6">
              O Clube Elgin oferece uma <strong>experiência de gamificação</strong> que permite acompanhar seu
              desempenho em tempo real. Com nosso painel intuitivo, você pode monitorar sua pontuação acumulada,
              verificar seu progresso e planejar suas próximas conquistas.
            </p>

            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">Níveis de fidelização:</h3>
              <p className="text-sm text-gray-600">
                Ao atingir metas e desafios, você sobe de nível e desbloqueia prêmios ainda mais valiosos.
              </p>
            </div>

            <ul className="space-y-3">
              {[
                "Acompanhe seu progresso em tempo real",
                "Visualize metas e desafios disponíveis",
                "Acumule pontos e troque por benefícios exclusivos",
                "Suba de nível e desbloqueie recompensas premium",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-elgin-blue mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/images/dashboard-preview.png"
              alt="Dashboard do Clube Elgin"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />

            <motion.div
              className="absolute -bottom-10 -right-10 w-32 h-32"
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6 }}
            >
              <Image src="/images/coins-stack.svg" alt="" width={128} height={128} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


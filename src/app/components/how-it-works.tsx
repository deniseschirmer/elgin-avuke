"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HowItWorks() {
  // Animações (apenas para os cards)
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* Título (sem animação) */}
        <h2 className="text-4xl text-primary font-light mb-1 text-left">
          Como Funciona?
        </h2>

        {/* Texto de introdução */}
        <p className="text-gray-600 max-w-[600px] leading-7 text-base mb-8 text-left">
          <strong>A cada venda realizada, você acumula pontos</strong> que podem ser utilizados para resgatar prêmios
          e recompensas. Esses pontos podem ser somados ao longo do ano, especialmente durante campanhas sazonais,
          para potencializar ainda mais suas conquistas.
        </p>

        {/* Cards animados */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={stagger}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px]">
            {/* Card 1 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white text-accent p-8 pl-20 rounded-lg shadow-lg transition-all duration-300 hover:border-primary hover:border cursor-pointer relative"
            >
              {/* Ícone */}
              <div className="absolute top-6 left-6">
                <Image
                  src="/assets/images/icon-.svg"
                  alt="Campanhas Sazonais"
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px]"
                />
              </div>
              {/* Título */}
              <h3 className="text-primary text-xl font-semibold mb-4">Campanhas Sazonais</h3>
              {/* Descrição */}
              <p className="font-light">
                Durante o ano, lançamos campanhas específicas que permitem acumular pontos extras. Aproveite estas
                oportunidades para maximizar suas recompensas.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white text-accent p-8 pl-20 rounded-lg shadow-lg transition-all duration-300 hover:border-primary hover:border cursor-pointer relative"
            >
              {/* Ícone */}
              <div className="absolute top-6 left-6">
                <Image
                  src="/assets/images/icon-person.svg"
                  alt="Desafios Personalizados"
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px]"
                />
              </div>
              {/* Título */}
              <h3 className="text-primary text-xl font-semibold mb-4">Desafios Personalizados</h3>
              {/* Descrição */}
              <p className="font-light">
                Participe de desafios que evoluem seu desempenho e alcance novas metas, desbloqueando recompensas
                diferenciadas.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

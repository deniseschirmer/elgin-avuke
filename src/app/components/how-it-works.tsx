"use client"




export default function HowItWorks() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-5xl text-primary font-light mb-1">Como Funciona?</h2>
      <p className="text-accent max-w-[600px] leading-7 text-base mb-8">
        <strong>A cada venda realizada, você acumula pontos</strong> que podem ser utilizados para resgatar prêmios
        e recompensas. Esses pontos podem ser somados ao longo do ano, especialmente durante campanhas sazonais,
        para potencializar ainda mais suas conquistas.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        <div className="bg-white text-accent p-8 pl-20 rounded-lg shadow-lg transition-all duration-300 hover:border-primary hover:border cursor-pointer">
          <div className="absolute top-6 left-6">
            {/* Icon SVG here */}
          </div>
          <h3 className="text-primary text-xl font-semibold mb-4">Campanhas Sazonais</h3>
          <p className="font-light">
            Durante o ano, lançamos campanhas específicas que permitem acumular pontos extras. Aproveite estas
            oportunidades para maximizar suas recompensas.
          </p>
        </div>
        {/* Repeat for other feature cards */}
      </div>
    </section>
  );
}
"use client";

export default function Journey() {
  return (
    <section className="journey py-8 md:py-16 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jornada-AxcaEmKiHHx523Pq6bJL58NMa4mMpy.png')] bg-cover bg-bottom bg-no-repeat">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <article className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl text-primary font-light mb-4">
              Sua Jornada, <span className="font-bold text-white">Seus Resultados</span>
            </h2>
            <p className="text-gray-600 leading-7 text-base md:text-lg mb-6 md:mb-8">
              O Clube Elgin+ oferece uma <span className="font-bold">experiência de gamificação</span> que
              permite acompanhar seu desempenho em tempo real. Com nosso painel intuitivo, você pode
              monitorar os pontos acumulados, verificar seu progresso e planejar suas próximas conquistas.
            </p>
            <ul className="space-y-4">
              <li className="text-gray-600 leading-7 text-base md:text-lg">
                <span className="font-bold">Níveis de Realização:</span> Ao atingir metas e desafios, você sobe de nível e desbloqueia prêmios ainda mais valiosos.
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

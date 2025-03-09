
"use client"

export default function Journey() {
  return (
    <section className="py-16 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jornada-AxcaEmKiHHx523Pq6bJL58NMa4mMpy.png')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-5">
        <h2 className="text-5xl text-primary font-light mb-4">
          Sua Jornada, <span className="font-bold">Seus Resultados</span>
        </h2>
        <p className="text-accent max-w-[600px] leading-7 text-base mb-8">
          O Clube Elgin+ oferece uma <span className="font-bold">experiência de gamificação</span> que permite
          acompanhar seu desempenho em tempo real.
        </p>
        <ul className="list-disc pl-6">
          <li className="text-accent leading-7 text-base">
            <span className="font-bold">Níveis de Realização:</span> Ao atingir metas e desafios, você sobe de nível e
            desbloqueia prêmios ainda mais valiosos.
          </li>
        </ul>
      </div>
    </section>
  );
}
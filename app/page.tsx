import Link from "next/link";

const stats = [
  { value: "EsPCEx", label: "rota principal de treinamento tatico" },
  { value: "AFA", label: "frentes avancadas para alto desempenho" },
  { value: "EFOMM", label: "planejamento por campanha e revisao" },
] as const;

const features = [
  {
    title: "Missao diaria guiada",
    description:
      "Sessões objetivas com ordem do dia, tempo de combate e foco total nas disciplinas mais cobradas.",
  },
  {
    title: "Banco de questoes de frente militar",
    description:
      "Treino inspirado no nivel de vestibulares militares, com correcao imediata e leitura de gabarito sem enrolacao.",
  },
  {
    title: "Painel de desempenho por campanha",
    description:
      "Acompanhe acertos, constancia, materias em risco e progresso rumo ao edital desejado.",
  },
] as const;

const plans = [
  {
    name: "Cadete",
    price: "R$ 24",
    detail: "/mes",
    description: "Entrada no QG para criar rotina e disciplina de base.",
    items: [
      "Missao diaria de questoes",
      "Revisao rapida por materia",
      "Historico inicial de desempenho",
    ],
  },
  {
    name: "Oficial",
    price: "R$ 47",
    detail: "/mes",
    description: "Plano central para avancar com estrategia e controle.",
    items: [
      "Tudo do plano Cadete",
      "Trilhas por banca e dificuldade",
      "Relatorios de precisao e constancia",
    ],
  },
  {
    name: "Academia",
    price: "R$ 79",
    detail: "/mes",
    description: "Preparacao de alta intensidade para metas maiores.",
    items: [
      "Tudo do plano Oficial",
      "Simulados completos por campanha",
      "Painel avancado de metas e desempenho",
    ],
  },
] as const;

const testimonials = [
  {
    name: "Henrique, foco EsPCEx",
    quote:
      "A sensacao e de entrar num centro de preparacao mesmo. Fica mais facil estudar serio quando a plataforma cobra postura.",
  },
  {
    name: "Ana Clara, preparacao AFA",
    quote:
      "O que me ganhou foi a clareza. Eu entro, vejo a missao do dia e executo sem perder tempo montando roteiro.",
  },
  {
    name: "Caio, revisao para EFOMM",
    quote:
      "A plataforma passa disciplina visual e isso muda meu comportamento. Parei de revisar de forma solta.",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#f5f0e5_0%,_#dfe6d5_45%,_#0f1711_45%,_#0b110d_100%)] text-stone-100">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8rem] top-[-5rem] h-72 w-72 rounded-full bg-[#c7a86c]/35 blur-3xl" />
          <div className="absolute right-[-8rem] top-24 h-80 w-80 rounded-full bg-[#41513f]/45 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
          <div className="absolute inset-y-0 left-[8%] hidden w-px bg-white/5 lg:block" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-12">
          <header className="flex flex-col gap-4 rounded-[2rem] border border-[#2f392f] bg-[#111913]/88 px-5 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#c7a86c]/45 bg-[#1b241b] text-sm font-bold tracking-[0.18em] text-[#e6d6ae]">
                QG
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d1c29b]">
                  QG de Aprovacao Militar
                </p>
                <p className="text-sm text-stone-300">
                  Preparacao com disciplina para vestibulares militares.
                </p>
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-3 text-sm text-stone-300">
              <a href="#frentes" className="transition hover:text-white">
                Frentes
              </a>
              <a href="#planos" className="transition hover:text-white">
                Assinaturas
              </a>
              <a href="#prova-social" className="transition hover:text-white">
                Resultados
              </a>
              <Link
                href="/quiz"
                className="rounded-full border border-[#c7a86c]/45 bg-[#c7a86c] px-4 py-2 font-semibold text-[#111913] transition hover:bg-[#d6b985]"
              >
                Entrar na sala tatica
              </Link>
            </nav>
          </header>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-8 text-[#0f1711] lg:text-stone-100">
              <span className="inline-flex rounded-full border border-[#907548]/40 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#6f5836] lg:bg-[#e6d6ae]/12 lg:text-[#e6d6ae]">
                Preparacao para EsPCEx, AFA e EFOMM
              </span>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-[#101510] sm:text-6xl lg:text-[#f4efe3]">
                  O seu centro de comando para passar em vestibulares militares.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[#374236] lg:text-stone-300">
                  Saia do estudo solto e entre em um ambiente de campanha:
                  missao do dia, revisao por frente, desempenho em campo e
                  planos criados para quem busca aprovacao com rotina e postura.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/quiz"
                  className="inline-flex items-center justify-center rounded-full bg-[#111913] px-6 py-3 text-sm font-semibold text-[#f4efe3] transition hover:bg-[#1a241b]"
                >
                  Testar missao gratuita
                </Link>
                <Link
                  href="/assinar"
                  className="inline-flex items-center justify-center rounded-full border border-[#425040] bg-white px-6 py-3 text-sm font-semibold text-[#111913] transition hover:border-[#111913]"
                >
                  Ver plano de campanha
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.5rem] border border-[#cdbb93]/40 bg-white/80 p-4 shadow-[0_20px_60px_rgba(17,25,19,0.12)] lg:border-white/10 lg:bg-white/5 lg:text-white"
                  >
                    <p className="text-2xl font-semibold">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-[#4f5a4d] lg:text-stone-300">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-black/20 blur-xl" />
              <div className="relative rounded-[2rem] border border-[#2f392f] bg-[#101710] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
                <div className="rounded-[1.75rem] border border-[#334033] bg-[linear-gradient(180deg,_#141d14_0%,_#0f1610_100%)] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.26em] text-[#d1c29b]">
                        Centro de comando
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-[#f4efe3]">
                        Ordem do dia pronta
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[#c7a86c]/30 bg-[#c7a86c]/10 px-3 py-2 text-right text-[#f4efe3]">
                      <p className="text-xs text-[#d9cba8]">Moral de tropa</p>
                      <p className="text-xl font-semibold">82%</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <InfoPanel
                      title="Frente ativa"
                      text="Matematica para EsPCEx com questoes de pressao e revisao curta."
                    />
                    <InfoPanel
                      title="Sequencia"
                      text="7 dias cumprindo missao diaria sem quebrar o ritmo."
                      accent
                    />
                  </div>

                  <div className="mt-5 rounded-[1.5rem] border border-[#344134] bg-[#f4efe3] p-5 text-[#111913]">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold">
                          Alvo prioritario
                        </p>
                        <p className="mt-1 text-sm text-[#5e6559]">
                          Maior chance de ganho rapido na proxima revisao.
                        </p>
                      </div>
                      <span className="rounded-full bg-[#d9c79e] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#59472c]">
                        Setor critico
                      </span>
                    </div>
                    <div className="mt-4 rounded-2xl bg-[#e7dfcb] p-4">
                      <p className="text-sm font-medium text-[#6b735f]">
                        Trigonometria operacional
                      </p>
                      <p className="mt-2 text-lg font-semibold">
                        Resolver sem hesitacao o bloco de angulos e triangulos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="frentes"
        className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[2rem] border border-[#2d392d] bg-[#131b14] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#c7a86c]/35 bg-[#c7a86c]/12 text-sm font-bold text-[#e6d6ae]">
                01
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-[#f4efe3]">
                {feature.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-stone-300">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="planos"
        className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-12"
      >
        <div className="rounded-[2.5rem] border border-[#2d392d] bg-[#0f1610] px-6 py-10 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d1c29b]">
              Assinaturas de campanha
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#f4efe3] sm:text-5xl">
              Planos pensados para o aluno que quer postura, clareza e progresso.
            </h2>
            <p className="mt-4 text-base leading-7 text-stone-300">
              Cada plano entrega uma camada maior de organizacao, leitura de
              desempenho e intensidade de treino para vestibulares militares.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <article
                key={plan.name}
                className={`rounded-[2rem] border p-6 ${
                  index === 1
                    ? "border-[#c7a86c] bg-[linear-gradient(180deg,_rgba(199,168,108,0.18)_0%,_rgba(15,22,16,1)_45%)] shadow-[0_24px_70px_rgba(199,168,108,0.18)]"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#f4efe3]">
                      {plan.name}
                    </h3>
                    <p className="mt-2 text-sm text-stone-300">
                      {plan.description}
                    </p>
                  </div>
                  {index === 1 ? (
                    <span className="rounded-full bg-[#c7a86c] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#111913]">
                      Mais estrategico
                    </span>
                  ) : null}
                </div>

                <div className="mt-6 flex items-end gap-1 text-[#f4efe3]">
                  <span className="text-4xl font-semibold">{plan.price}</span>
                  <span className="pb-1 text-sm text-stone-400">
                    {plan.detail}
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  {plan.items.map((item) => (
                    <p
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-200"
                    >
                      {item}
                    </p>
                  ))}
                </div>

                <Link
                  href="/assinar"
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                    index === 1
                      ? "bg-[#c7a86c] text-[#111913] hover:bg-[#d6b985]"
                      : "bg-white text-[#111913] hover:bg-[#ece4d0]"
                  }`}
                >
                  Selecionar {plan.name}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="prova-social"
        className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d1c29b]">
              Resultado em campo
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#f4efe3]">
              Quem estuda aqui sente a diferenca no comportamento.
            </h2>
          </div>
          <Link
            href="/assinar"
            className="inline-flex items-center justify-center rounded-full border border-[#c7a86c]/45 bg-[#c7a86c] px-5 py-3 text-sm font-semibold text-[#111913] transition hover:bg-[#d6b985]"
          >
            Entrar no QG
          </Link>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[2rem] border border-[#2d392d] bg-[#131b14] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
            >
              <p className="text-base leading-8 text-stone-200">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#d1c29b]">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function InfoPanel({
  title,
  text,
  accent = false,
}: {
  title: string;
  text: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-[1.5rem] border p-4 ${
        accent
          ? "border-[#c7a86c]/25 bg-[#c7a86c]/10 text-[#f4efe3]"
          : "border-white/10 bg-white/5 text-[#f4efe3]"
      }`}
    >
      <p className="text-xs uppercase tracking-[0.2em] text-[#d1c29b]">
        {title}
      </p>
      <p className="mt-3 text-sm leading-6 text-stone-300">{text}</p>
    </div>
  );
}

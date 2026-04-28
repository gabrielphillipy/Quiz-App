import Link from "next/link";

const features = [
  {
    title: "Rotina de revisão guiada",
    description:
      "Organize o estudo por blocos curtos, com progresso claro e foco em constância.",
  },
  {
    title: "Questões com perfil militar",
    description:
      "Treinos inspirados no nível de cobrança de provas como EsPCEx, com feedback imediato.",
  },
  {
    title: "Assinatura com evolução real",
    description:
      "Acompanhe desempenho por matéria, acertos por sessão e consistência semanal.",
  },
] as const;

const stats = [
  { value: "+12 mil", label: "questões estudadas por semana" },
  { value: "91%", label: "dos alunos relatam mais clareza na revisão" },
  { value: "3x", label: "mais sessões concluídas com rotina guiada" },
] as const;

const plans = [
  {
    name: "Start",
    price: "R$ 19",
    period: "/mês",
    description: "Para começar a revisar com consistência.",
    cta: "Começar agora",
    highlight: false,
    items: [
      "Acesso ao quiz diário",
      "Sessões rápidas de revisão",
      "Histórico básico de desempenho",
    ],
  },
  {
    name: "Pro",
    price: "R$ 39",
    period: "/mês",
    description: "Plano ideal para quem quer evoluir com estratégia.",
    cta: "Assinar plano Pro",
    highlight: true,
    items: [
      "Tudo do plano Start",
      "Trilhas por matéria e dificuldade",
      "Relatórios de precisão e progresso",
    ],
  },
  {
    name: "Elite",
    price: "R$ 69",
    period: "/mês",
    description: "Para preparação intensa e metas mais ambiciosas.",
    cta: "Entrar no Elite",
    highlight: false,
    items: [
      "Tudo do plano Pro",
      "Simulados completos e revisão inteligente",
      "Painel de metas e desempenho avançado",
    ],
  },
] as const;

const testimonials = [
  {
    name: "Lucas, 18 anos",
    quote:
      "O formato parece app mesmo. Fica muito mais fácil manter ritmo do que estudar só por PDF.",
  },
  {
    name: "Marina, turma preparatória",
    quote:
      "A parte que mais ajudou foi enxergar onde eu errava com rapidez e repetir sem travar.",
  },
  {
    name: "Rafael, foco EsPCEx",
    quote:
      "Passei a revisar todos os dias porque a experiência ficou leve, direta e motivadora.",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#fffdf8_0%,_#f8fafc_35%,_#eaf2ff_100%)] text-slate-950">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8rem] top-[-5rem] h-64 w-64 rounded-full bg-amber-300/40 blur-3xl" />
          <div className="absolute right-[-6rem] top-20 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-slate-900/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-12">
          <header className="flex flex-col gap-4 rounded-[2rem] border border-slate-200/70 bg-white/75 px-5 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
                QZ
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Quiz App
                </p>
                <p className="text-sm text-slate-600">
                  Preparação moderna para quem estuda com meta.
                </p>
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <a href="#recursos" className="transition hover:text-slate-950">
                Recursos
              </a>
              <a href="#planos" className="transition hover:text-slate-950">
                Assinaturas
              </a>
              <a href="#depoimentos" className="transition hover:text-slate-950">
                Depoimentos
              </a>
              <Link
                href="/quiz"
                className="rounded-full bg-slate-950 px-4 py-2 font-semibold text-white transition hover:bg-slate-800"
              >
                Testar quiz
              </Link>
            </nav>
          </header>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-7">
              <span className="inline-flex rounded-full border border-sky-200 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-900">
                Plataforma de estudo por assinatura
              </span>

              <div className="space-y-5">
                <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                  Estude como em um app premium, não como em uma apostila sem
                  vida.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">
                  Transforme revisão para EsPCEx e outras provas em uma rotina
                  visual, objetiva e motivadora, com sessões curtas, métricas
                  claras e planos pensados para evolução contínua.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/quiz"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Experimentar gratuitamente
                </Link>
                <Link
                  href="/assinar"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-950"
                >
                  Ver planos
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.5rem] border border-slate-200 bg-white/80 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
                  >
                    <p className="text-2xl font-semibold text-slate-950">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-slate-950/10 blur-xl" />
              <div className="relative rounded-[2rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
                <div className="rounded-[1.75rem] bg-[linear-gradient(180deg,_#162033_0%,_#09111f_100%)] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-sky-200/80">
                        Painel do aluno
                      </p>
                      <p className="mt-2 text-2xl font-semibold">
                        Sua próxima sessão já pronta
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/10 px-3 py-2 text-right">
                      <p className="text-xs text-slate-300">Aproveitamento</p>
                      <p className="text-xl font-semibold">82%</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        Trilha ativa
                      </p>
                      <p className="mt-3 text-lg font-semibold">
                        Matemática EsPCEx
                      </p>
                      <p className="mt-2 text-sm text-slate-300">
                        12 questões, revisão por nível e feedback imediato.
                      </p>
                    </div>

                    <div className="rounded-[1.5rem] border border-emerald-300/20 bg-emerald-300/10 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-emerald-100/80">
                        Sequência
                      </p>
                      <p className="mt-3 text-lg font-semibold text-emerald-50">
                        7 dias em ritmo
                      </p>
                      <p className="mt-2 text-sm text-emerald-50/80">
                        A rotina visual ajuda a voltar todos os dias.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-white p-5 text-slate-900">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold">
                          Questão recomendada
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          Tema com maior chance de ganho rápido hoje.
                        </p>
                      </div>
                      <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-800">
                        Prioridade
                      </span>
                    </div>
                    <div className="mt-4 rounded-2xl bg-slate-100 p-4">
                      <p className="text-sm font-medium text-slate-500">
                        Trigonometria
                      </p>
                      <p className="mt-2 text-lg font-semibold">
                        Em um triângulo retângulo, se sen θ = 3/5...
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
        id="recursos"
        className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-sm font-bold text-amber-900">
                +
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight">
                {feature.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="planos"
        className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12"
      >
        <div className="rounded-[2.5rem] bg-slate-950 px-6 py-10 text-white sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
              Assinaturas
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Planos para converter curiosidade em rotina de estudo.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Comece simples, evolua com análise e chegue ao plano com maior
              intensidade quando quiser uma preparação mais completa.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-[2rem] border p-6 ${
                  plan.highlight
                    ? "border-cyan-300 bg-[linear-gradient(180deg,_rgba(34,211,238,0.18)_0%,_rgba(15,23,42,1)_45%)] shadow-[0_24px_70px_rgba(34,211,238,0.18)]"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{plan.name}</h3>
                    <p className="mt-2 text-sm text-slate-300">
                      {plan.description}
                    </p>
                  </div>
                  {plan.highlight ? (
                    <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950">
                      Mais escolhido
                    </span>
                  ) : null}
                </div>

                <div className="mt-6 flex items-end gap-1">
                  <span className="text-4xl font-semibold">{plan.price}</span>
                  <span className="pb-1 text-sm text-slate-400">
                    {plan.period}
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  {plan.items.map((item) => (
                    <p
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                    >
                      {item}
                    </p>
                  ))}
                </div>

                <Link
                  href="/assinar"
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                    plan.highlight
                      ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200"
                      : "bg-white text-slate-950 hover:bg-slate-200"
                  }`}
                >
                  {plan.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="depoimentos"
        className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Confiança
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              Quem usa sente a diferença na rotina.
            </h2>
          </div>
          <Link
            href="/assinar"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-950"
          >
            Assinar agora
          </Link>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]"
            >
              <p className="text-base leading-8 text-slate-700">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

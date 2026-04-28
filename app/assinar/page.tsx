"use client";

import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    name: "Start",
    price: 19,
    description: "Para começar a revisar com consistência e criar ritmo.",
    badge: "Entrada",
    benefits: [
      "Quiz diário com correção imediata",
      "Sessões rápidas de revisão",
      "Histórico básico de desempenho",
    ],
  },
  {
    name: "Pro",
    price: 39,
    description: "Plano ideal para evoluir com estratégia e foco por matéria.",
    badge: "Mais escolhido",
    benefits: [
      "Tudo do Start",
      "Trilhas por matéria e dificuldade",
      "Relatórios de precisão e progresso",
    ],
  },
  {
    name: "Elite",
    price: 69,
    description: "Preparação intensa com visão completa da sua evolução.",
    badge: "Alta performance",
    benefits: [
      "Tudo do Pro",
      "Simulados completos e revisão inteligente",
      "Painel de metas e desempenho avançado",
    ],
  },
] as const;

type PlanName = (typeof plans)[number]["name"];

export default function SubscribePage() {
  const [selectedPlan, setSelectedPlan] = useState<PlanName>("Pro");
  const plan = plans.find(({ name }) => name === selectedPlan) ?? plans[1];
  const annualTotal = plan.price * 12;
  const annualDiscount = Math.round(annualTotal * 0.15);
  const annualPrice = annualTotal - annualDiscount;

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#f8fafc_0%,_#eef6ff_50%,_#fff8ef_100%)] text-slate-950">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-6rem] top-0 h-56 w-56 rounded-full bg-cyan-300/30 blur-3xl" />
          <div className="absolute bottom-[-6rem] right-[-4rem] h-72 w-72 rounded-full bg-amber-300/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-12">
          <header className="flex flex-col gap-4 rounded-[2rem] border border-slate-200/70 bg-white/80 px-5 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
                QZ
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Quiz App
                </p>
                <p className="text-sm text-slate-600">
                  Assinatura para transformar revisão em rotina.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/"
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-950"
              >
                Voltar ao site
              </Link>
              <Link
                href="/quiz"
                className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Ver demonstração
              </Link>
            </div>
          </header>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="space-y-4">
                <span className="inline-flex rounded-full border border-cyan-200 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-900">
                  Checkout de assinatura
                </span>
                <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">
                  Escolha o plano certo e entre no seu próximo ciclo de estudo.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">
                  Uma tela pensada para converter: comparação rápida, resumo do
                  valor e um fluxo simples para começar hoje mesmo.
                </p>
              </div>

              <div className="grid gap-4">
                {plans.map((item) => {
                  const isActive = item.name === selectedPlan;

                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setSelectedPlan(item.name)}
                      className={`rounded-[2rem] border p-5 text-left transition ${
                        isActive
                          ? "border-slate-950 bg-slate-950 text-white shadow-[0_28px_70px_rgba(15,23,42,0.18)]"
                          : "border-slate-200 bg-white text-slate-900 hover:border-slate-400"
                      }`}
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <h2 className="text-2xl font-semibold">
                              {item.name}
                            </h2>
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
                                isActive
                                  ? "bg-white/10 text-cyan-200"
                                  : "bg-slate-100 text-slate-600"
                              }`}
                            >
                              {item.badge}
                            </span>
                          </div>
                          <p
                            className={`mt-2 text-sm leading-7 ${
                              isActive ? "text-slate-300" : "text-slate-600"
                            }`}
                          >
                            {item.description}
                          </p>
                        </div>

                        <div className="sm:text-right">
                          <p className="text-3xl font-semibold">
                            R$ {item.price}
                          </p>
                          <p
                            className={`text-sm ${
                              isActive ? "text-slate-300" : "text-slate-500"
                            }`}
                          >
                            por mês
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 grid gap-3 sm:grid-cols-3">
                        {item.benefits.map((benefit) => (
                          <div
                            key={benefit}
                            className={`rounded-2xl px-4 py-3 text-sm ${
                              isActive
                                ? "bg-white/6 text-slate-200"
                                : "bg-slate-50 text-slate-600"
                            }`}
                          >
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:pt-12">
              <div className="sticky top-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Resumo do pedido
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold">
                      Plano {plan.name}
                    </h2>
                  </div>
                  <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-900">
                    Assinatura mensal
                  </span>
                </div>

                <div className="mt-6 rounded-[1.75rem] bg-slate-950 p-5 text-white">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-sm text-slate-300">Valor atual</p>
                      <p className="mt-2 text-4xl font-semibold">
                        R$ {plan.price}
                      </p>
                    </div>
                    <p className="pb-1 text-sm text-slate-400">por mês</p>
                  </div>
                  <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300" />
                  </div>
                  <p className="mt-3 text-sm text-slate-300">
                    Cobrança recorrente com cancelamento simples.
                  </p>
                </div>

                <div className="mt-6 space-y-3 rounded-[1.5rem] bg-slate-50 p-4">
                  <PriceRow label="Plano escolhido" value={`R$ ${plan.price}/mês`} />
                  <PriceRow label="Economia anual estimada" value={`R$ ${annualDiscount}`} />
                  <PriceRow label="Plano anual equivalente" value={`R$ ${annualPrice}/ano`} />
                </div>

                <form className="mt-6 space-y-4">
                  <Field label="Nome completo" placeholder="Seu nome" />
                  <Field
                    label="E-mail"
                    placeholder="voce@exemplo.com"
                    type="email"
                  />

                  <div className="grid gap-4 sm:grid-cols-[1.3fr_0.7fr]">
                    <Field label="Número do cartão" placeholder="0000 0000 0000 0000" />
                    <Field label="Validade" placeholder="MM/AA" />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-[1fr_0.7fr]">
                    <Field label="Nome no cartão" placeholder="Como está no cartão" />
                    <Field label="CVV" placeholder="123" />
                  </div>

                  <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="mt-1 h-4 w-4 rounded border-slate-300 accent-slate-950"
                    />
                    <span>
                      Concordo com os termos de uso e autorizo a cobrança
                      recorrente do plano selecionado.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Confirmar assinatura do plano {plan.name}
                  </button>
                </form>

                <p className="mt-4 text-center text-xs leading-6 text-slate-500">
                  Ambiente visual de assinatura. A integração real com pagamento
                  pode ser conectada depois com Stripe, Mercado Pago ou outro
                  gateway.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function PriceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="text-slate-500">{label}</span>
      <span className="font-semibold text-slate-900">{value}</span>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-950"
      />
    </label>
  );
}

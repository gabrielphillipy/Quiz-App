"use client";

import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    name: "Cadete",
    price: 24,
    badge: "Base",
    description: "Entrada no QG para criar ritmo e disciplina.",
    benefits: [
      "Missao diaria de questoes",
      "Revisao rapida por frente",
      "Historico inicial de desempenho",
    ],
  },
  {
    name: "Oficial",
    price: 47,
    badge: "Mais escolhido",
    description: "Plano central para evoluir com estrategia e controle.",
    benefits: [
      "Tudo do plano Cadete",
      "Trilhas por banca e dificuldade",
      "Relatorios taticos de precisao",
    ],
  },
  {
    name: "Academia",
    price: 79,
    badge: "Alta intensidade",
    description: "Camada maxima de preparo para campanhas maiores.",
    benefits: [
      "Tudo do plano Oficial",
      "Simulados completos por edital",
      "Painel avancado de metas",
    ],
  },
] as const;

type PlanName = (typeof plans)[number]["name"];

export default function SubscribePage() {
  const [selectedPlan, setSelectedPlan] = useState<PlanName>("Oficial");
  const plan = plans.find((item) => item.name === selectedPlan) ?? plans[1];
  const annualTotal = plan.price * 12;
  const annualDiscount = Math.round(annualTotal * 0.18);
  const annualPrice = annualTotal - annualDiscount;

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#f2ebdb_0%,_#d8dfcf_34%,_#0f1711_34%,_#0a0f0b_100%)] text-stone-100">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-7rem] top-0 h-56 w-56 rounded-full bg-[#c7a86c]/30 blur-3xl" />
          <div className="absolute bottom-[-7rem] right-[-4rem] h-72 w-72 rounded-full bg-[#3f503d]/40 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-12">
          <header className="flex flex-col gap-4 rounded-[2rem] border border-[#2f392f] bg-[#121a13]/88 px-5 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#c7a86c]/45 bg-[#1b241b] text-sm font-bold tracking-[0.18em] text-[#e6d6ae]">
                QG
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d1c29b]">
                  QG de Aprovacao Militar
                </p>
                <p className="text-sm text-stone-300">
                  Assinatura para vestibulares militares.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/"
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-stone-100 transition hover:bg-white/10"
              >
                Voltar ao QG
              </Link>
              <Link
                href="/quiz"
                className="rounded-full bg-[#c7a86c] px-4 py-2 text-sm font-semibold text-[#111913] transition hover:bg-[#d6b985]"
              >
                Ver sala tatica
              </Link>
            </div>
          </header>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-6 text-[#101510] lg:text-stone-100">
              <div className="space-y-4">
                <span className="inline-flex rounded-full border border-[#907548]/40 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#6f5836] lg:bg-[#e6d6ae]/12 lg:text-[#e6d6ae]">
                  Sala de adesao
                </span>
                <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-[#f4efe3]">
                  Escolha o plano de campanha que combina com a sua meta.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[#374236] lg:text-stone-300">
                  A jornada aqui nao e casual. Selecione o nivel de preparo,
                  veja o resumo da operacao e entre em um ambiente focado em
                  aprovacao militar.
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
                          ? "border-[#c7a86c] bg-[#111913] text-[#f4efe3] shadow-[0_28px_70px_rgba(0,0,0,0.24)]"
                          : "border-[#cdbb93]/45 bg-white/80 text-[#111913] hover:border-[#7f6a46] lg:border-white/10 lg:bg-white/5 lg:text-stone-100"
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
                                  ? "bg-[#c7a86c]/12 text-[#e6d6ae]"
                                  : "bg-[#e9e0ca] text-[#6b5837] lg:bg-white/10 lg:text-[#d1c29b]"
                              }`}
                            >
                              {item.badge}
                            </span>
                          </div>
                          <p
                            className={`mt-2 text-sm leading-7 ${
                              isActive
                                ? "text-stone-300"
                                : "text-[#4e584b] lg:text-stone-300"
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
                              isActive
                                ? "text-stone-400"
                                : "text-[#5b6458] lg:text-stone-400"
                            }`}
                          >
                            por mes
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 grid gap-3 sm:grid-cols-3">
                        {item.benefits.map((benefit) => (
                          <div
                            key={benefit}
                            className={`rounded-2xl px-4 py-3 text-sm ${
                              isActive
                                ? "bg-white/6 text-stone-200"
                                : "bg-[#edf0e4] text-[#4d564a] lg:bg-white/5 lg:text-stone-300"
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
              <div className="sticky top-6 rounded-[2rem] border border-[#2f392f] bg-[#111913] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.32)] sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d1c29b]">
                      Resumo da operacao
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold text-[#f4efe3]">
                      Plano {plan.name}
                    </h2>
                  </div>
                  <span className="rounded-full bg-[#c7a86c] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#111913]">
                    Adesao mensal
                  </span>
                </div>

                <div className="mt-6 rounded-[1.75rem] border border-[#394739] bg-[linear-gradient(180deg,_#151e15_0%,_#101710_100%)] p-5 text-[#f4efe3]">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-sm text-stone-300">Valor atual</p>
                      <p className="mt-2 text-4xl font-semibold">
                        R$ {plan.price}
                      </p>
                    </div>
                    <p className="pb-1 text-sm text-stone-400">por mes</p>
                  </div>
                  <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[79%] rounded-full bg-gradient-to-r from-[#c7a86c] via-[#d6b985] to-[#f0dfb5]" />
                  </div>
                  <p className="mt-3 text-sm text-stone-300">
                    Acesso recorrente com cancelamento simples e retorno imediato
                    ao centro de comando.
                  </p>
                </div>

                <div className="mt-6 space-y-3 rounded-[1.5rem] bg-[#1a231b] p-4">
                  <PriceRow
                    label="Plano escolhido"
                    value={`R$ ${plan.price}/mes`}
                  />
                  <PriceRow
                    label="Economia anual estimada"
                    value={`R$ ${annualDiscount}`}
                  />
                  <PriceRow
                    label="Plano anual equivalente"
                    value={`R$ ${annualPrice}/ano`}
                  />
                </div>

                <form className="mt-6 space-y-4">
                  <Field label="Nome completo" placeholder="Seu nome de cadastro" />
                  <Field
                    label="E-mail operacional"
                    placeholder="voce@exemplo.com"
                    type="email"
                  />

                  <div className="grid gap-4 sm:grid-cols-[1.3fr_0.7fr]">
                    <Field
                      label="Numero do cartao"
                      placeholder="0000 0000 0000 0000"
                    />
                    <Field label="Validade" placeholder="MM/AA" />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-[1fr_0.7fr]">
                    <Field
                      label="Nome no cartao"
                      placeholder="Como aparece no cartao"
                    />
                    <Field label="CVV" placeholder="123" />
                  </div>

                  <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-300">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="mt-1 h-4 w-4 rounded border-white/20 accent-[#c7a86c]"
                    />
                    <span>
                      Autorizo a cobranca recorrente e confirmo a adesao ao plano
                      selecionado para uso na plataforma.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#c7a86c] px-6 py-4 text-sm font-semibold text-[#111913] transition hover:bg-[#d6b985]"
                  >
                    Confirmar adesao ao plano {plan.name}
                  </button>
                </form>

                <p className="mt-4 text-center text-xs leading-6 text-stone-400">
                  Tela visual de assinatura. A integracao real pode ser ligada
                  depois com Stripe, Mercado Pago ou outro gateway.
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
      <span className="text-stone-400">{label}</span>
      <span className="font-semibold text-[#f4efe3]">{value}</span>
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
      <span className="mb-2 block text-sm font-medium text-stone-200">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#f4efe3] outline-none transition placeholder:text-stone-500 focus:border-[#c7a86c]"
      />
    </label>
  );
}

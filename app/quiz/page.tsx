"use client";

import Link from "next/link";
import { useState } from "react";

const questions = [
  {
    question: "Se log₂(x) = 3, então x é:",
    options: ["6", "8", "9", "12"],
    answer: "8",
    explanation: "Se log₂(x) = 3, então x = 2³, portanto x = 8.",
    tag: "Logaritmos",
  },
  {
    question: "PA: a1 = 3, r = 4. Qual é o 5º termo?",
    options: ["15", "17", "19", "21"],
    answer: "19",
    explanation: "a5 = a1 + (5 - 1) × r = 3 + 4 × 4 = 19.",
    tag: "Progressão aritmética",
  },
  {
    question: "Se f(x) = 2x² - 3x + 1, então f(2) é igual a:",
    options: ["1", "2", "3", "4"],
    answer: "3",
    explanation: "f(2) = 2·(2²) - 3·2 + 1 = 8 - 6 + 1 = 3.",
    tag: "Funções",
  },
  {
    question: "As raízes da equação x² - 5x + 6 = 0 são:",
    options: ["1 e 6", "2 e 3", "3 e 5", "-2 e -3"],
    answer: "2 e 3",
    explanation:
      "Fatorando, x² - 5x + 6 = (x - 2)(x - 3). Logo, as raízes são 2 e 3.",
    tag: "Equação do 2º grau",
  },
  {
    question: "Em um triângulo retângulo, se sen θ = 3/5, então cos θ vale:",
    options: ["4/5", "3/4", "5/4", "2/5"],
    answer: "4/5",
    explanation:
      "Se sen θ = 3/5, podemos usar o triângulo 3-4-5. Assim, cos θ = 4/5.",
    tag: "Trigonometria",
  },
  {
    question: "O número de anagramas da palavra SOLDADO é:",
    options: ["420", "840", "1260", "2520"],
    answer: "2520",
    explanation:
      "A palavra tem 7 letras, com O repetido 2 vezes e D repetido 2 vezes. Logo, 7!/(2!·2!) = 2520.",
    tag: "Análise combinatória",
  },
  {
    question: "Uma turma tem 6 alunos. Quantas comissões de 2 alunos podem ser formadas?",
    options: ["12", "15", "20", "30"],
    answer: "15",
    explanation: "A quantidade de comissões é C(6,2) = 6!/(2!·4!) = 15.",
    tag: "Combinatória",
  },
  {
    question: "A soma dos ângulos internos de um hexágono convexo é:",
    options: ["540°", "720°", "900°", "1080°"],
    answer: "720°",
    explanation:
      "A soma dos ângulos internos de um polígono é (n - 2)·180°. Para n = 6, temos 4·180° = 720°.",
    tag: "Geometria plana",
  },
  {
    question: "A área de um círculo de raio 3 é:",
    options: ["3π", "6π", "9π", "12π"],
    answer: "9π",
    explanation: "A = πr² = π·3² = 9π.",
    tag: "Geometria plana",
  },
  {
    question: "Se 2ˣ = 32, então x é:",
    options: ["4", "5", "6", "8"],
    answer: "5",
    explanation: "Como 32 = 2⁵, segue que x = 5.",
    tag: "Potenciação",
  },
  {
    question: "A média aritmética dos números 4, 7, 9 e 10 é:",
    options: ["7", "7,5", "8", "8,5"],
    answer: "7,5",
    explanation: "A média é (4 + 7 + 9 + 10)/4 = 30/4 = 7,5.",
    tag: "Estatística",
  },
  {
    question: "Se det(A) = 4 e det(B) = -3, então det(AB) é:",
    options: ["-12", "-7", "7", "12"],
    answer: "-12",
    explanation:
      "Vale a propriedade det(AB) = det(A)·det(B). Logo, 4·(-3) = -12.",
    tag: "Matrizes",
  },
] as const;

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const q = questions[current];
  const progress = ((current + (selected ? 1 : 0)) / questions.length) * 100;
  const isLastQuestion = current === questions.length - 1;
  const answeredCorrectly = selected === q.answer;

  function handleAnswer(option: string) {
    if (selected) return;
    setSelected(option);

    if (option === q.answer) {
      setScore((prev) => prev + 1);
    }
  }

  function next() {
    setSelected(null);
    setCurrent((prev) => prev + 1);
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#0f1711_0%,_#111b12_55%,_#0b0f0c_100%)] text-stone-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-5rem] h-72 w-72 rounded-full bg-[#c7a86c]/20 blur-3xl" />
        <div className="absolute bottom-[-5rem] right-[-4rem] h-80 w-80 rounded-full bg-[#3d4f3b]/30 blur-3xl" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-5 py-8 sm:px-8 lg:px-12">
        <header className="mb-8 flex flex-col gap-4 rounded-[2rem] border border-[#2f392f] bg-[#111913]/88 px-5 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#c7a86c]/45 bg-[#1b241b] text-sm font-bold tracking-[0.18em] text-[#e6d6ae]">
              QG
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d1c29b]">
                Sala tatica de matematica
              </p>
              <p className="text-sm text-stone-300">
                Treino de missao para vestibulares militares.
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
              href="/assinar"
              className="rounded-full bg-[#c7a86c] px-4 py-2 text-sm font-semibold text-[#111913] transition hover:bg-[#d6b985]"
            >
              Assinar plano
            </Link>
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="flex flex-col justify-between rounded-[2rem] border border-[#2f392f] bg-[#111913]/92 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:p-8">
            <div className="space-y-8">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-4">
                  <span className="inline-flex rounded-full border border-[#c7a86c]/35 bg-[#c7a86c]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#e6d6ae]">
                    Operacao EsPCEx
                  </span>

                  <div className="space-y-3">
                    <h1 className="max-w-lg text-4xl font-semibold tracking-tight text-[#f4efe3] sm:text-5xl">
                      Treine como quem se prepara para uma prova militar de verdade.
                    </h1>
                    <p className="max-w-xl text-sm leading-6 text-stone-300 sm:text-base">
                      Missao objetiva, leitura rapida de desempenho e questoes
                      escolhidas para manter disciplina de revisao.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#c7a86c]/25 bg-[#c7a86c]/8 px-4 py-3 text-right">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#d1c29b]">
                    Setor atual
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-[#f4efe3]">
                    {current + 1}
                    <span className="text-sm text-stone-400">
                      /{questions.length}
                    </span>
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <MetricCard label="Acertos" value={`${score}`} detail="boletim parcial" />
                <MetricCard
                  label="Indice"
                  value={`${Math.round((score / questions.length) * 100)}%`}
                  detail="precisao da tropa"
                />
                <MetricCard
                  label="Frente"
                  value="Mat"
                  detail="campanha prioritaria"
                />
              </div>

              <div className="rounded-[1.75rem] border border-[#304030] bg-[#0d140e] p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[#d1c29b]">
                      Progresso da missao
                    </p>
                    <p className="mt-2 text-sm text-stone-300">
                      Funcoes, algebra, trigonometria, combinatoria e geometria
                      em uma mesma frente de combate.
                    </p>
                  </div>
                  <span className="rounded-full bg-white/8 px-3 py-1 text-sm font-medium text-stone-200">
                    {Math.round(progress)}%
                  </span>
                </div>

                <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#c7a86c] via-[#d6b985] to-[#f0dfb5] transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-[#c7a86c]/18 bg-[#c7a86c]/8 p-5 text-sm text-[#f2e4bf]">
              Ordem do dia: concentre energia nas frentes com maior retorno e
              avance sem acumular lacunas.
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d3c29d]/45 bg-[#f4efe3] p-6 text-[#111913] shadow-[0_30px_90px_rgba(0,0,0,0.22)] sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-[#111913] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#f4efe3]">
                {q.tag}
              </span>
              <span className="text-sm font-medium text-[#6a715f]">
                Resposta unica
              </span>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-[#6f5836]">
                Missao {current + 1}
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-[2rem]">
                {q.question}
              </h2>
            </div>

            <div className="mt-8 space-y-3">
              {q.options.map((option) => {
                const isSelected = selected === option;
                const isCorrect = option === q.answer;

                let optionClassName =
                  "border-[#d9cfb7] bg-[#ece5d6] text-[#293025] hover:border-[#8c7349] hover:bg-[#e2d7bd]";

                if (selected) {
                  if (isCorrect) {
                    optionClassName =
                      "border-[#496048] bg-[#dbe7d8] text-[#203020]";
                  } else if (isSelected) {
                    optionClassName =
                      "border-[#8a5b49] bg-[#ecd7ce] text-[#47271a]";
                  }
                }

                return (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    disabled={!!selected}
                    className={`flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left transition duration-200 ${optionClassName} ${selected ? "cursor-default" : "cursor-pointer"}`}
                  >
                    <span className="text-base font-medium">{option}</span>
                    <span className="rounded-full border border-current/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
                      {selected
                        ? isCorrect
                          ? "Correta"
                          : isSelected
                            ? "Sua resposta"
                            : "Opcao"
                        : "Responder"}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 rounded-[1.75rem] bg-[#e7dfcc] p-5">
              {!selected ? (
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-[#111913]">
                      Analise com calma e execute com precisao
                    </p>
                    <p className="mt-1 text-sm text-[#5f6758]">
                      O gabarito comentado aparece assim que a resposta e marcada.
                    </p>
                  </div>
                  <div className="hidden h-12 w-12 rounded-2xl border border-[#d1c29b] bg-[#f4efe3] sm:block" />
                </div>
              ) : (
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${answeredCorrectly ? "bg-[#d4e5cf] text-[#213320]" : "bg-[#ead3cb] text-[#4a281d]"}`}
                    >
                      {answeredCorrectly ? "Acerto confirmado" : "Ajuste necessario"}
                    </span>
                    <span className="text-sm text-[#5f6758]">
                      Gabarito: {q.answer}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-[#374236]">
                    {q.explanation}
                  </p>

                  {isLastQuestion ? (
                    <div className="mt-6 flex flex-col gap-4 rounded-[1.5rem] bg-[#111913] px-5 py-5 text-[#f4efe3] sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-lg font-semibold">
                          Missao concluida
                        </p>
                        <p className="mt-1 text-sm text-stone-300">
                          Voce acertou {score} de {questions.length} questoes.
                        </p>
                      </div>

                      <button
                        onClick={restart}
                        className="rounded-2xl bg-[#c7a86c] px-5 py-3 text-sm font-semibold text-[#111913] transition hover:bg-[#d6b985]"
                      >
                        Reiniciar treinamento
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={next}
                      className="mt-6 rounded-2xl bg-[#111913] px-5 py-3 text-sm font-semibold text-[#f4efe3] transition hover:bg-[#1b241b]"
                    >
                      Avancar setor
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function MetricCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
      <p className="text-xs uppercase tracking-[0.2em] text-[#d1c29b]">
        {label}
      </p>
      <p className="mt-3 text-2xl font-semibold text-[#f4efe3]">{value}</p>
      <p className="mt-1 text-sm text-stone-400">{detail}</p>
    </div>
  );
}

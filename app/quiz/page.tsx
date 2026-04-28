"use client";

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
    tag: "Progressão Aritmética",
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
    tag: "Análise Combinatória",
  },
  {
    question: "Uma turma tem 6 alunos. Quantas comissões de 2 alunos podem ser formadas?",
    options: ["12", "15", "20", "30"],
    answer: "15",
    explanation:
      "A quantidade de comissões é C(6,2) = 6!/(2!·4!) = 15.",
    tag: "Combinatória",
  },
  {
    question: "A soma dos ângulos internos de um hexágono convexo é:",
    options: ["540°", "720°", "900°", "1080°"],
    answer: "720°",
    explanation:
      "A soma dos ângulos internos de um polígono é (n - 2)·180°. Para n = 6, temos 4·180° = 720°.",
    tag: "Geometria Plana",
  },
  {
    question: "A área de um círculo de raio 3 é:",
    options: ["3π", "6π", "9π", "12π"],
    answer: "9π",
    explanation: "A = πr² = π·3² = 9π.",
    tag: "Geometria Plana",
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
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#23314f_0%,_#0f172a_40%,_#020617_100%)] text-slate-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-[-6rem] h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-[-5rem] right-[-3rem] h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-5 py-10 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-8">
            <div className="space-y-8">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-4">
                  <span className="inline-flex items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
                    Study Sprint
                  </span>

                  <div className="space-y-3">
                    <h1 className="max-w-lg text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                      Matemática estilo EsPCEx
                    </h1>
                    <p className="max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
                      Treine com uma seleção maior de questões de revisão em um
                      ritmo de app de estudos, com feedback imediato.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-right">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Questão atual
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-white">
                    {current + 1}
                    <span className="text-sm text-slate-400">
                      /{questions.length}
                    </span>
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <MetricCard
                  label="Acertos"
                  value={`${score}`}
                  detail="desempenho"
                />
                <MetricCard
                  label="Precisão"
                  value={`${Math.round((score / questions.length) * 100)}%`}
                  detail="meta sugerida"
                />
                <MetricCard
                  label="Questões"
                  value={`${questions.length}`}
                  detail="nível EsPCEx"
                />
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/55 p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                      Progresso da sessão
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      Funções, álgebra, trigonometria, combinatória e geometria
                      no mesmo sprint.
                    </p>
                  </div>
                  <span className="rounded-full bg-white/8 px-3 py-1 text-sm font-medium text-slate-200">
                    {Math.round(progress)}%
                  </span>
                </div>

                <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 hidden rounded-[1.75rem] border border-emerald-300/15 bg-emerald-300/10 p-5 text-sm text-emerald-50 lg:block">
              Dica: se quiser, no próximo passo eu posso separar as questões
              por matéria ou por dificuldade.
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/12 bg-white p-6 text-slate-900 shadow-2xl shadow-slate-950/40 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                {q.tag}
              </span>
              <span className="text-sm font-medium text-slate-500">
                Resposta única
              </span>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-sky-700">
                Desafio {current + 1}
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
                  "border-slate-200 bg-slate-50 text-slate-700 hover:border-sky-300 hover:bg-sky-50";

                if (selected) {
                  if (isCorrect) {
                    optionClassName =
                      "border-emerald-300 bg-emerald-50 text-emerald-900";
                  } else if (isSelected) {
                    optionClassName =
                      "border-rose-300 bg-rose-50 text-rose-900";
                  }
                }

                return (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    disabled={!!selected}
                    className={`group flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left transition duration-200 ${optionClassName} ${selected ? "cursor-default" : "cursor-pointer"}`}
                  >
                    <span className="text-base font-medium">{option}</span>
                    <span className="rounded-full border border-current/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
                      {selected
                        ? isCorrect
                          ? "Correta"
                          : isSelected
                            ? "Sua escolha"
                            : "Opção"
                        : "Escolher"}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 rounded-[1.75rem] bg-slate-100 p-5">
              {!selected ? (
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Leia com calma antes de responder
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      O feedback aparece assim que você selecionar uma opção.
                    </p>
                  </div>
                  <div className="hidden h-12 w-12 rounded-2xl bg-white shadow-sm sm:block" />
                </div>
              ) : (
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${answeredCorrectly ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"}`}
                    >
                      {answeredCorrectly ? "Resposta certa" : "Resposta errada"}
                    </span>
                    <span className="text-sm text-slate-500">
                      Gabarito: {q.answer}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-700">
                    {q.explanation}
                  </p>

                  {isLastQuestion ? (
                    <div className="mt-6 flex flex-col gap-4 rounded-[1.5rem] bg-slate-950 px-5 py-5 text-white sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-lg font-semibold">
                          Sessão concluída
                        </p>
                        <p className="mt-1 text-sm text-slate-300">
                          Você acertou {score} de {questions.length} questões.
                        </p>
                      </div>

                      <button
                        onClick={restart}
                        className="rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                      >
                        Reiniciar quiz
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={next}
                      className="mt-6 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      Próxima questão
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
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
        {label}
      </p>
      <p className="mt-3 text-2xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-sm text-slate-400">{detail}</p>
    </div>
  );
}

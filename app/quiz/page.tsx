"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type ExamKey = "ita" | "espcex" | "efomm";

type Question = {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  tag: string;
  source: string;
  sourceType: "adaptada" | "inedita";
};

const examMeta: Record<
  ExamKey,
  {
    label: string;
    shortLabel: string;
    mission: string;
    description: string;
  }
> = {
  ita: {
    label: "ITA",
    shortLabel: "ITA",
    mission: "Operação engenharia de alta pressão",
    description:
      "Cinco questões para quem quer sentir o tipo de raciocínio mais exigente da carreira aeronáutica.",
  },
  espcex: {
    label: "EsPCEx",
    shortLabel: "EsPCEx",
    mission: "Operação academia do Exército",
    description:
      "Cinco questões para treino rápido de matemática com perfil de prova da EsPCEx.",
  },
  efomm: {
    label: "EFOMM",
    shortLabel: "EFOMM",
    mission: "Operação academia do mar",
    description:
      "Cinco questões com foco no estilo da EFOMM, misturando base algébrica e leitura objetiva.",
  },
};

const questionBank: Record<ExamKey, Question[]> = {
  ita: [
    {
      question:
        "Adaptada do ITA 2024: se x e y são reais positivos com x + y = 6 e xy = 5, então x² + y² vale:",
      options: ["16", "18", "26", "36"],
      answer: "26",
      explanation:
        "Usamos x² + y² = (x + y)² - 2xy = 6² - 2·5 = 36 - 10 = 26.",
      tag: "Álgebra",
      source: "Adaptada de prova anterior do ITA",
      sourceType: "adaptada",
    },
    {
      question:
        "Adaptada do ITA 2023: o valor de log₂(32) + log₃(27) é:",
      options: ["6", "7", "8", "9"],
      answer: "8",
      explanation: "log₂(32) = 5 e log₃(27) = 3. Logo, a soma é 8.",
      tag: "Logaritmos",
      source: "Adaptada de prova anterior do ITA",
      sourceType: "adaptada",
    },
    {
      question:
        "Adaptada do ITA 2022: a soma das raízes da equação x² - 7x + 10 = 0 é:",
      options: ["3", "5", "7", "10"],
      answer: "7",
      explanation:
        "Pela relação de Viète, a soma das raízes de ax² + bx + c = 0 é -b/a. Aqui, vale 7.",
      tag: "Polinômios",
      source: "Adaptada de prova anterior do ITA",
      sourceType: "adaptada",
    },
    {
      question:
        "Inédita no estilo ITA: se a progressão geométrica tem primeiro termo 2 e razão 3, então o 4º termo é:",
      options: ["18", "36", "54", "81"],
      answer: "54",
      explanation: "a₄ = 2·3³ = 2·27 = 54.",
      tag: "Progressões",
      source: "Inédita no estilo ITA",
      sourceType: "inedita",
    },
    {
      question:
        "Inédita no estilo ITA: se sen θ = 5/13 em um triângulo retângulo, então cos θ é:",
      options: ["12/13", "5/12", "13/12", "8/13"],
      answer: "12/13",
      explanation:
        "No triângulo 5-12-13, se o cateto oposto é 5 e a hipotenusa é 13, então o cateto adjacente é 12. Logo, cos θ = 12/13.",
      tag: "Trigonometria",
      source: "Inédita no estilo ITA",
      sourceType: "inedita",
    },
  ],
  espcex: [
    {
      question:
        "Adaptada da EsPCEx 2020: a soma dos ângulos internos de um octógono convexo é:",
      options: ["900°", "1080°", "1260°", "1440°"],
      answer: "1080°",
      explanation:
        "A soma dos ângulos internos de um polígono convexo é (n - 2)·180°. Para n = 8, temos 6·180° = 1080°.",
      tag: "Geometria plana",
      source: "Adaptada de prova anterior da EsPCEx",
      sourceType: "adaptada",
    },
    {
      question:
        "Adaptada da EsPCEx 2019: se 2x - 3 = 11, então x é igual a:",
      options: ["4", "5", "6", "7"],
      answer: "7",
      explanation: "2x = 14, portanto x = 7.",
      tag: "Equação do 1º grau",
      source: "Adaptada de prova anterior da EsPCEx",
      sourceType: "adaptada",
    },
    {
      question:
        "Adaptada da EsPCEx 2018: a média aritmética entre 6, 8 e 10 é:",
      options: ["7", "8", "9", "10"],
      answer: "8",
      explanation: "(6 + 8 + 10)/3 = 24/3 = 8.",
      tag: "Estatística",
      source: "Adaptada de prova anterior da EsPCEx",
      sourceType: "adaptada",
    },
    {
      question:
        "Inédita no estilo EsPCEx: em uma PA de primeiro termo 5 e razão 3, o 6º termo vale:",
      options: ["17", "18", "20", "23"],
      answer: "20",
      explanation: "a₆ = 5 + (6 - 1)·3 = 5 + 15 = 20.",
      tag: "Progressão aritmética",
      source: "Inédita no estilo EsPCEx",
      sourceType: "inedita",
    },
    {
      question:
        "Inédita no estilo EsPCEx: a área de um círculo de raio 4 é:",
      options: ["8π", "12π", "16π", "20π"],
      answer: "16π",
      explanation: "A = πr² = π·4² = 16π.",
      tag: "Geometria plana",
      source: "Inédita no estilo EsPCEx",
      sourceType: "inedita",
    },
  ],
  efomm: [
    {
      question:
        "Adaptada da EFOMM 2021: se z = 3 + 4i, então o módulo de z é:",
      options: ["4", "5", "6", "7"],
      answer: "5",
      explanation: "|z| = √(3² + 4²) = √25 = 5.",
      tag: "Números complexos",
      source: "Adaptada de prova anterior da EFOMM",
      sourceType: "adaptada",
    },
    {
      question:
        "Adaptada da EFOMM 2020: se det(A) = 2 e det(B) = -4, então det(AB) é:",
      options: ["-8", "-2", "2", "8"],
      answer: "-8",
      explanation:
        "Pela propriedade dos determinantes, det(AB) = det(A)·det(B) = 2·(-4) = -8.",
      tag: "Matrizes",
      source: "Adaptada de prova anterior da EFOMM",
      sourceType: "adaptada",
    },
    {
      question:
        "Adaptada da EFOMM 2019: o número de combinações de 5 elementos tomados 2 a 2 é:",
      options: ["5", "8", "10", "20"],
      answer: "10",
      explanation: "C(5,2) = 5!/(2!·3!) = 10.",
      tag: "Combinatória",
      source: "Adaptada de prova anterior da EFOMM",
      sourceType: "adaptada",
    },
    {
      question:
        "Inédita no estilo EFOMM: se f(x) = x² - 4x + 4, então f(3) vale:",
      options: ["1", "2", "3", "4"],
      answer: "1",
      explanation: "f(3) = 3² - 4·3 + 4 = 9 - 12 + 4 = 1.",
      tag: "Funções",
      source: "Inédita no estilo EFOMM",
      sourceType: "inedita",
    },
    {
      question:
        "Inédita no estilo EFOMM: em um triângulo retângulo com catetos 9 e 12, a hipotenusa mede:",
      options: ["13", "14", "15", "16"],
      answer: "15",
      explanation:
        "Pelo teorema de Pitágoras, h = √(9² + 12²) = √225 = 15.",
      tag: "Geometria",
      source: "Inédita no estilo EFOMM",
      sourceType: "inedita",
    },
  ],
};

export default function Quiz() {
  const [selectedExam, setSelectedExam] = useState<ExamKey>("espcex");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const examQuestions = questionBank[selectedExam];
  const exam = examMeta[selectedExam];
  const q = examQuestions[current];

  const progress = ((current + (selected ? 1 : 0)) / examQuestions.length) * 100;
  const isLastQuestion = current === examQuestions.length - 1;
  const answeredCorrectly = selected === q.answer;
  const adaptedCount = useMemo(
    () => examQuestions.filter((item) => item.sourceType === "adaptada").length,
    [examQuestions],
  );

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

  function changeExam(examKey: ExamKey) {
    setSelectedExam(examKey);
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
                Teste gratuito por vestibular
              </p>
              <p className="text-sm text-stone-300">
                Escolha a banca e enfrente 5 questões de aquecimento.
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
              Assinar plano completo
            </Link>
          </div>
        </header>

        <div className="mb-8 rounded-[2rem] border border-[#2f392f] bg-[#111913]/92 p-4 sm:p-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d1c29b]">
                Escolha de frente
              </p>
              <p className="mt-1 text-sm text-stone-300">
                Cada trilha gratuita tem 5 questões, misturando adaptadas de
                provas anteriores e inéditas no mesmo estilo.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {(Object.keys(examMeta) as ExamKey[]).map((examKey) => {
                const isActive = selectedExam === examKey;
                return (
                  <button
                    key={examKey}
                    type="button"
                    onClick={() => changeExam(examKey)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      isActive
                        ? "bg-[#c7a86c] text-[#111913]"
                        : "border border-white/10 bg-white/5 text-stone-200 hover:bg-white/10"
                    }`}
                  >
                    {examMeta[examKey].shortLabel}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="flex flex-col justify-between rounded-[2rem] border border-[#2f392f] bg-[#111913]/92 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:p-8">
            <div className="space-y-8">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-4">
                  <span className="inline-flex rounded-full border border-[#c7a86c]/35 bg-[#c7a86c]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#e6d6ae]">
                    {exam.mission}
                  </span>

                  <div className="space-y-3">
                    <h1 className="max-w-lg text-4xl font-semibold tracking-tight text-[#f4efe3] sm:text-5xl">
                      {exam.label}: simulado rápido de entrada
                    </h1>
                    <p className="max-w-xl text-sm leading-6 text-stone-300 sm:text-base">
                      {exam.description}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#c7a86c]/25 bg-[#c7a86c]/8 px-4 py-3 text-right">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#d1c29b]">
                    Questão atual
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-[#f4efe3]">
                    {current + 1}
                    <span className="text-sm text-stone-400">
                      /{examQuestions.length}
                    </span>
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <MetricCard label="Acertos" value={`${score}`} detail="parcial da missão" />
                <MetricCard
                  label="Oficiais"
                  value={`${adaptedCount}`}
                  detail="adaptadas de prova"
                />
                <MetricCard
                  label="Inéditas"
                  value={`${examQuestions.length - adaptedCount}`}
                  detail="estilo da banca"
                />
              </div>

              <div className="rounded-[1.75rem] border border-[#304030] bg-[#0d140e] p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[#d1c29b]">
                      Progresso do teste gratuito
                    </p>
                    <p className="mt-2 text-sm text-stone-300">
                      Quando terminar esta trilha, você pode trocar de banca e
                      reiniciar outro bloco de 5 questões.
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
              Fonte da trilha: {adaptedCount} questões adaptadas de provas
              anteriores do {exam.label} e {examQuestions.length - adaptedCount}{" "}
              inéditas no mesmo perfil.
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d3c29d]/45 bg-[#f4efe3] p-6 text-[#111913] shadow-[0_30px_90px_rgba(0,0,0,0.22)] sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#111913] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#f4efe3]">
                  {q.tag}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
                    q.sourceType === "adaptada"
                      ? "bg-[#d9c79e] text-[#59472c]"
                      : "bg-[#dbe7d8] text-[#294029]"
                  }`}
                >
                  {q.sourceType === "adaptada" ? "Questão adaptada" : "Questão inédita"}
                </span>
              </div>
              <span className="text-sm font-medium text-[#6a715f]">
                {exam.label}
              </span>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-[#6f5836]">
                Fonte: {q.source}
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
                            : "Opção"
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
                      Selecione a resposta e veja o comentário
                    </p>
                    <p className="mt-1 text-sm text-[#5f6758]">
                      O teste gratuito mostra a lógica da solução e deixa claro
                      se a questão é adaptada ou inédita.
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
                      {answeredCorrectly ? "Acerto confirmado" : "Ajuste necessário"}
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
                          Teste {exam.label} concluído
                        </p>
                        <p className="mt-1 text-sm text-stone-300">
                          Você acertou {score} de {examQuestions.length} questões.
                        </p>
                      </div>

                      <div className="flex flex-col gap-3 sm:flex-row">
                        <button
                          onClick={restart}
                          className="rounded-2xl bg-[#c7a86c] px-5 py-3 text-sm font-semibold text-[#111913] transition hover:bg-[#d6b985]"
                        >
                          Refazer esta trilha
                        </button>
                        <Link
                          href="/assinar"
                          className="rounded-2xl border border-white/10 bg-white/8 px-5 py-3 text-center text-sm font-semibold text-[#f4efe3] transition hover:bg-white/12"
                        >
                          Desbloquear plano completo
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={next}
                      className="mt-6 rounded-2xl bg-[#111913] px-5 py-3 text-sm font-semibold text-[#f4efe3] transition hover:bg-[#1b241b]"
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
      <p className="text-xs uppercase tracking-[0.2em] text-[#d1c29b]">
        {label}
      </p>
      <p className="mt-3 text-2xl font-semibold text-[#f4efe3]">{value}</p>
      <p className="mt-1 text-sm text-stone-400">{detail}</p>
    </div>
  );
}

import { trainings } from "@/app/data/training";

export function TrainingSection() {
  return (
    <section
      className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50"
      aria-labelledby="training-heading"
    >
      <h2
        id="training-heading"
        className="mb-4 text-lg font-semibold text-neutral-800 dark:text-neutral-200"
      >
        수료 교육
      </h2>
      <ul className="flex flex-col gap-6">
        {trainings.map((training) => (
          <li
            key={`${training.courseName}-${training.period}`}
            className="flex flex-col gap-3 border-b border-neutral-200 pb-6 last:border-0 last:pb-0 dark:border-neutral-700"
          >
            <div className="flex flex-col gap-1">
              <span className="font-medium text-neutral-900 dark:text-neutral-100">
                {training.courseName}
              </span>
              <div className="flex flex-wrap gap-x-4 gap-y-0 text-sm text-neutral-500 dark:text-neutral-400">
                <span>교육 기간: {training.period}</span>
                <span>교육 기관: {training.institution}</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              {training.summary}
            </p>
            <div className="grid gap-2 sm:grid-cols-1">
              <div>
                <span className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  주요 학습
                </span>
                <ul className="mt-1 list-inside list-disc space-y-0.5 text-sm text-neutral-700 dark:text-neutral-300">
                  {training.mainLearning.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  추가 학습
                </span>
                <ul className="mt-1 list-inside list-disc space-y-0.5 text-sm text-neutral-700 dark:text-neutral-300">
                  {training.additionalLearning.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

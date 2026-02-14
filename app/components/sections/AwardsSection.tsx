import { awards } from "@/app/data/awards";

export function AwardsSection() {
  return (
    <section
      className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50"
      aria-labelledby="awards-heading"
    >
      <h2
        id="awards-heading"
        className="mb-4 text-lg font-semibold text-neutral-800 dark:text-neutral-200"
      >
        수상
      </h2>
      <ul className="flex flex-col gap-4">
        {awards.map((award) => (
          <li
            key={`${award.name}-${award.year}`}
            className="flex flex-col gap-1 border-b border-neutral-200 pb-4 last:border-0 last:pb-0 dark:border-neutral-700"
          >
            <span className="font-medium text-neutral-900 dark:text-neutral-100">
              {award.name}
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-0 text-sm text-neutral-500 dark:text-neutral-400">
              <span>수상 연도: {award.year}</span>
              <span>수여 기관: {award.issuer}</span>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              {award.reason}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

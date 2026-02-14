import { certifications } from "@/app/data/certifications";

export function CertificationsSection() {
  return (
    <section
      className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50"
      aria-labelledby="certifications-heading"
    >
      <h2
        id="certifications-heading"
        className="mb-4 text-lg font-semibold text-neutral-800 dark:text-neutral-200"
      >
        자격증
      </h2>
      <ul className="flex flex-col gap-4">
        {certifications.map((cert) => (
          <li
            key={`${cert.name}-${cert.acquiredAt}`}
            className="flex flex-col gap-1 border-b border-neutral-200 pb-4 last:border-0 last:pb-0 dark:border-neutral-700"
          >
            <span className="font-medium text-neutral-900 dark:text-neutral-100">
              {cert.name}
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-0 text-sm text-neutral-500 dark:text-neutral-400">
              <span>취득 연월: {cert.acquiredAt}</span>
              <span>발급 기관: {cert.issuer}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

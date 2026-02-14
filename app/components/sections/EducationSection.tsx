import { education } from "@/app/data/education";

export function EducationSection() {
  return (
    <section
      className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 dark:border-neutral-800 dark:bg-neutral-900/30 md:p-8"
      aria-labelledby="education-heading"
    >
      <h2
        id="education-heading"
        className="mb-4 text-lg font-semibold text-neutral-800 dark:text-neutral-200"
      >
        학력
      </h2>
      <dl className="grid gap-3">
        <div>
          <dt className="text-sm text-neutral-500 dark:text-neutral-400">
            학교
          </dt>
          <dd className="font-medium text-neutral-900 dark:text-neutral-100">
            {education.school}
          </dd>
        </div>
        <div>
          <dt className="text-sm text-neutral-500 dark:text-neutral-400">
            전공
          </dt>
          <dd className="font-medium text-neutral-900 dark:text-neutral-100">
            {education.major}
          </dd>
        </div>
        <div>
          <dt className="text-sm text-neutral-500 dark:text-neutral-400">
            졸업
          </dt>
          <dd className="font-medium text-neutral-900 dark:text-neutral-100">
            {education.graduationYear}
          </dd>
        </div>
        <div>
          <dt className="text-sm text-neutral-500 dark:text-neutral-400">
            학점
          </dt>
          <dd className="font-medium text-neutral-900 dark:text-neutral-100">
            {education.gpa}
          </dd>
        </div>
      </dl>
    </section>
  );
}

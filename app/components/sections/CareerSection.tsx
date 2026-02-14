import { careers, totalCareerMonths } from "@/app/data/career";

export function CareerSection() {
  return (
    <section
      className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50"
      aria-labelledby="career-heading"
    >
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <h2
          id="career-heading"
          className="text-lg font-semibold text-neutral-800 dark:text-neutral-200"
        >
          경력
        </h2>
        <span className="text-sm text-neutral-500 dark:text-neutral-400">
          {totalCareerMonths}
        </span>
      </div>

      <ul className="flex flex-col gap-8">
        {careers.map((career) => (
          <li
            key={`${career.company}-${career.period}`}
            className="flex flex-col gap-4 border-b border-neutral-200 pb-8 last:border-0 last:pb-0 dark:border-neutral-700"
          >
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-0">
              <span className="font-medium text-neutral-900 dark:text-neutral-100">
                {career.period}
              </span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                {career.periodMonths}
              </span>
            </div>
            <dl className="grid gap-2 sm:grid-cols-1">
              <div>
                <dt className="text-sm text-neutral-500 dark:text-neutral-400">
                  회사/소속
                </dt>
                <dd className="font-medium text-neutral-900 dark:text-neutral-100">
                  {career.company}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-500 dark:text-neutral-400">
                  고용 형태/직무
                </dt>
                <dd className="font-medium text-neutral-900 dark:text-neutral-100">
                  {career.employmentType}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-500 dark:text-neutral-400">
                  프로젝트 명/주요 업무
                </dt>
                <dd className="font-medium text-neutral-900 dark:text-neutral-100">
                  {career.projectName}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-500 dark:text-neutral-400">
                  주요 직무
                </dt>
                <dd className="font-medium text-neutral-900 dark:text-neutral-100">
                  {career.mainRole}
                </dd>
              </div>
            </dl>

            {career.description && (
              <div className="mt-4 rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900/30">
                <h3 className="mb-3 text-base font-semibold text-neutral-800 dark:text-neutral-200">
                  경력기술서
                </h3>
                <dl className="grid gap-2">
                  <div>
                    <dt className="text-sm text-neutral-500 dark:text-neutral-400">
                      프로젝트명
                    </dt>
                    <dd className="font-medium text-neutral-900 dark:text-neutral-100">
                      {career.description.projectName}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-neutral-500 dark:text-neutral-400">
                      프로젝트 기간
                    </dt>
                    <dd className="font-medium text-neutral-900 dark:text-neutral-100">
                      {career.description.projectPeriod}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-neutral-500 dark:text-neutral-400">
                      프로젝트 설명
                    </dt>
                    <dd className="text-neutral-700 dark:text-neutral-300">
                      {career.description.projectDescription}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-neutral-500 dark:text-neutral-400">
                      기여도 및 인원 구성
                    </dt>
                    <dd className="text-neutral-700 dark:text-neutral-300">
                      {career.description.contribution}
                    </dd>
                  </div>
                </dl>
                <div className="mt-3">
                  <dt className="mb-1 text-sm text-neutral-500 dark:text-neutral-400">
                    주요 업무 및 상세 역할
                  </dt>
                  <ul className="list-inside list-disc space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                    {career.description.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

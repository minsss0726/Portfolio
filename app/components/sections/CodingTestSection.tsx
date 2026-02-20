/**
 * 코딩테스트 섹션
 * 프로그래머스 통계·AI 분석·SQL 학습 결과 이미지와 어필 문장
 */

const IMAGES = {
  stats: "/images/coding-test-stats.png",
  ai: "/images/coding-test-ai.png",
  sql: "/images/coding-test-sql.png",
} as const;

export function CodingTestSection() {
  return (
    <section
      className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 dark:border-neutral-800 dark:bg-neutral-900/30 md:p-8"
      aria-labelledby="coding-test-heading"
    >
      <h2
        id="coding-test-heading"
        className="mb-4 text-lg font-semibold text-neutral-800 dark:text-neutral-200"
      >
        코딩테스트
      </h2>

      <p className="mb-6 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
        프로그래머스에서 <strong>277개의 문제</strong>를 해결했으며,{" "}
        <strong>1,613점</strong>을 달성해 전국 7,322위를 기록했습니다. AI 종합
        분석 기준 종합 점수 53.1점으로 <strong>상위권</strong>에 위치해 있으며,
        자료구조·구현·탐색 영역에서 평균 이상의 문제 해결력을 갖추고 있습니다.
        이분탐색, 다이나믹 프로그래밍, DFS 등 지속적으로 학습하며 실력을 높여
        나가고 있습니다.
      </p>

      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <figure className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700">
          <img
            src={IMAGES.stats}
            alt="프로그래머스 코딩테스트 순위, 점수, 해결한 문제 수 통계"
            className="h-auto w-full object-cover object-top"
          />
          <figcaption className="sr-only">
            순위 7,322위, 점수 1,613점, 해결한 문제 277개
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700">
          <img
            src={IMAGES.ai}
            alt="프로그래머스 AI 종합 분석 및 영역별 분석 차트"
            className="h-auto w-full object-cover object-top"
          />
          <figcaption className="sr-only">
            AI 종합 분석, 영역별 분석, 종합 점수 53.1점 상위권
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 sm:col-span-2 lg:col-span-1">
          <img
            src={IMAGES.sql}
            alt="SQL 학습 영역별 문제 세트 및 평균 점수"
            className="h-auto w-full object-cover object-top"
          />
          <figcaption className="sr-only">
            SQL SELECT, SUM MAX MIN, GROUP BY, IS NULL, JOIN 등 학습 현황
          </figcaption>
        </figure>
      </div>

      <div className="rounded-xl border border-neutral-200 bg-white/60 p-4 dark:border-neutral-700 dark:bg-neutral-800/40">
        <h3 className="mb-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200">
          SQL
        </h3>
        <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          SQL 영역에서는 SELECT, SUM/MAX/MIN, GROUP BY, IS NULL, JOIN 등
          핵심 주제에서 총 <strong>87문제</strong>를 풀이했습니다. 기본 문법과
          집계·그룹화를 높은 정확도로 숙달했으며, 출제 빈도가 높고 난이도 있는
          JOIN 문제까지 완료해 테이블 간 관계를 다루는{" "}
          <strong>고급 SQL 활용 능력</strong>을 갖추고 있습니다.
        </p>
      </div>
    </section>
  );
}

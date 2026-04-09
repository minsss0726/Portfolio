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
        프로그래머스에서 <strong>341개의 문제</strong>를 해결했으며,{" "}
        <strong>1,629점</strong>을 달성해 전국 <strong>6,285위</strong>를
        기록했습니다. AI 종합 분석 기준 종합 점수{" "}
        <strong>53.1점</strong>으로 분포상 <strong>상위</strong> 구간에
        속합니다. 영역별 분석에서는 <strong>구현·탐색</strong>이 평균보다 높고,{" "}
        <strong>자료구조·수학</strong>은 평균 대비 낮은 편이며 정렬은 평균에
        가깝습니다. 플랫폼 AI는 모든 영역 평균 수준을 전제로{" "}
        <strong>이분탐색, 다이나믹 프로그래밍, DFS</strong> 학습을 권장하므로,
        해당 분야를 포함해 꾸준히 보완하고 있습니다.
      </p>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <figure className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700">
          <img
            src={IMAGES.stats}
            alt="프로그래머스 코딩테스트 순위 6,285위, 점수 1,629점, 해결한 문제 341개"
            className="h-auto w-full object-cover object-top"
          />
          <figcaption className="sr-only">
            순위 6,285위, 점수 1,629점, 해결한 문제 341개
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700">
          <img
            src={IMAGES.ai}
            alt="프로그래머스 AI 종합 분석, 영역별 레이더 차트, 종합 점수 53.1점 상위 구간"
            className="h-auto w-full object-cover object-top"
          />
          <figcaption className="sr-only">
            AI 종합 분석, 구현·탐색 평균 이상·자료구조·수학 보완, 종합 53.1점 상위
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 sm:col-span-2">
          <img
            src={IMAGES.sql}
            alt="SQL 학습 SELECT부터 String·Date까지 영역별 문제 세트 진행 현황"
            className="h-auto w-full object-cover object-top"
          />
          <figcaption className="sr-only">
            SQL 영역별 문제 세트: SELECT·SUM·GROUP BY·IS NULL·JOIN 완료, String·Date 진행 중
          </figcaption>
        </figure>
      </div>

      <div className="rounded-xl border border-neutral-200 bg-white/60 p-4 dark:border-neutral-700 dark:bg-neutral-800/40">
        <h3 className="mb-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200">
          SQL
        </h3>
        <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          SQL 학습 코스에서 SELECT, SUM·MAX·MIN, GROUP BY, IS NULL, JOIN
          문제 세트를 모두 완료해 총 <strong>87문제</strong>를 풀이했습니다.
          SELECT·집계 계열은 평균 점수가 높은 편이고, 출제 빈도가 높은 JOIN
          세트까지 마쳐 테이블 간 관계를 다루는 실무형 쿼리 기반을 쌓았습니다.{" "}
          <strong>String·Date</strong> 세트(0/19)는 아직 시작 전이며, 문자열·날짜
          처리를 이어서 학습할 예정입니다.
        </p>
      </div>
    </section>
  );
}

/**
 * 상단 고정 네비게이션 바
 * 앵커 링크로 해당 섹션으로 스크롤 이동
 */

export function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 px-4 py-3 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/80"
      aria-label="메인 내비게이션"
    >
      <div className="mx-auto flex max-w-2xl items-center justify-between">
        <a
          href="#"
          className="text-lg font-bold text-neutral-900 dark:text-neutral-100"
        >
          포트폴리오
        </a>
        <ul className="flex items-center gap-6">
          <li>
            <a
              href="#profile"
              className="text-sm font-medium text-neutral-600 underline-offset-4 hover:underline dark:text-neutral-400 dark:hover:text-neutral-200"
            >
              프로필
            </a>
          </li>
          <li>
            <a
              href="#career"
              className="text-sm font-medium text-neutral-600 underline-offset-4 hover:underline dark:text-neutral-400 dark:hover:text-neutral-200"
            >
              경력사항
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

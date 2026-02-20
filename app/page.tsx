import { FaGithub } from "react-icons/fa";
import { Navbar } from "@/app/components/layout/Navbar";
import { IntroHero } from "@/app/components/sections/IntroHero";
import { ProfileSection } from "@/app/components/sections/ProfileSection";
import { CodingTestSection } from "@/app/components/sections/CodingTestSection";
import { CareerSection } from "@/app/components/sections/CareerSection";
import { CertificationsSection } from "@/app/components/sections/CertificationsSection";
import { TrainingSection } from "@/app/components/sections/TrainingSection";
import { ProjectsSection } from "@/app/components/sections/ProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-white dark:bg-neutral-950">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-16 pb-24 md:px-6 md:py-24">
        <IntroHero />

        <p className="mb-6 text-center text-sm leading-relaxed text-neutral-500 sm:text-left dark:text-neutral-400">
          현재 페이지는 Next.js 기반으로 Vercel로 배포된 포트폴리오 페이지입니다.
        </p>

        <nav
          className="mb-16 flex justify-center sm:justify-start md:mb-20"
          aria-label="GitHub 링크"
        >
          <a
            href="https://github.com/minsss0726"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50/50 px-4 py-2.5 text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800/50 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
          >
            <FaGithub className="h-5 w-5" aria-hidden />
            <span>GitHub</span>
          </a>
        </nav>

        <section
          id="profile"
          className="scroll-mt-20 flex flex-col gap-12 py-16 md:py-24"
          aria-labelledby="profile-section-heading"
        >
          <h2
            id="profile-section-heading"
            className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 md:text-3xl"
          >
            프로필
          </h2>
          <ProfileSection />
          <CertificationsSection />
          <TrainingSection />
        </section>

        <section
          id="coding-test"
          className="scroll-mt-20 flex flex-col gap-12 py-16 md:py-24"
          aria-labelledby="coding-test-section-heading"
        >
          <h2
            id="coding-test-section-heading"
            className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 md:text-3xl"
          >
            코딩테스트
          </h2>
          <CodingTestSection />
        </section>

        <section
          id="career"
          className="scroll-mt-20 flex flex-col gap-12 py-16 md:py-24"
          aria-labelledby="career-section-heading"
        >
          <h2
            id="career-section-heading"
            className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 md:text-3xl"
          >
            경력사항
          </h2>
          <CareerSection />
        </section>

        <section
          id="projects"
          className="scroll-mt-20 flex flex-col gap-12 py-16 md:py-24"
          aria-labelledby="projects-section-heading"
        >
          <h2
            id="projects-section-heading"
            className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 md:text-3xl"
          >
            프로젝트
          </h2>
          <ProjectsSection />
        </section>
      </main>
    </div>
  );
}

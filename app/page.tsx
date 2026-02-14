import { Navbar } from "@/app/components/layout/Navbar";
import { ProfileSection } from "@/app/components/sections/ProfileSection";
import { CareerSection } from "@/app/components/sections/CareerSection";
import { EducationSection } from "@/app/components/sections/EducationSection";
import { CertificationsSection } from "@/app/components/sections/CertificationsSection";
import { TrainingSection } from "@/app/components/sections/TrainingSection";
import { AwardsSection } from "@/app/components/sections/AwardsSection";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <main className="mx-auto max-w-2xl px-4 py-8 pb-20 sm:px-6 sm:py-12">
        <header className="mb-12 text-center sm:text-left">
          <h1 className="text-4xl font-bold">포트폴리오</h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Next.js 기반 개발자 포트폴리오 웹사이트
          </p>
        </header>

        <section
          id="profile"
          className="scroll-mt-20 flex flex-col gap-12"
          aria-labelledby="profile-section-heading"
        >
          <h2
            id="profile-section-heading"
            className="text-2xl font-bold text-neutral-900 dark:text-neutral-100"
          >
            프로필
          </h2>
          <ProfileSection />
          <EducationSection />
          <CertificationsSection />
          <TrainingSection />
          <AwardsSection />
        </section>

        <section
          id="career"
          className="scroll-mt-20 flex flex-col gap-12"
          aria-labelledby="career-section-heading"
        >
          <h2
            id="career-section-heading"
            className="text-2xl font-bold text-neutral-900 dark:text-neutral-100"
          >
            경력사항
          </h2>
          <CareerSection />
        </section>
      </main>
    </div>
  );
}

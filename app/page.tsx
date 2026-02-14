import { Navbar } from "@/app/components/layout/Navbar";
import { IntroHero } from "@/app/components/sections/IntroHero";
import { ProfileSection } from "@/app/components/sections/ProfileSection";
import { CareerSection } from "@/app/components/sections/CareerSection";
import { EducationSection } from "@/app/components/sections/EducationSection";
import { CertificationsSection } from "@/app/components/sections/CertificationsSection";
import { TrainingSection } from "@/app/components/sections/TrainingSection";
import { AwardsSection } from "@/app/components/sections/AwardsSection";
import { ProjectsSection } from "@/app/components/sections/ProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <main className="mx-auto max-w-2xl px-4 py-8 pb-20 sm:px-6 sm:py-12">
        <IntroHero />

        <section
          id="profile"
          className="scroll-mt-20 mb-24 flex flex-col gap-12"
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
          className="scroll-mt-20 mb-24 flex flex-col gap-12"
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

        <section
          id="projects"
          className="scroll-mt-20 flex flex-col gap-12"
          aria-labelledby="projects-section-heading"
        >
          <h2
            id="projects-section-heading"
            className="text-2xl font-bold text-neutral-900 dark:text-neutral-100"
          >
            프로젝트
          </h2>
          <ProjectsSection />
        </section>
      </main>
    </div>
  );
}

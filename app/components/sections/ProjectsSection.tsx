"use client";

import { useState, useCallback, useEffect } from "react";
import { projects, type ProjectItem } from "@/app/data/projects";
import { TechIcons, TechIconsOnly } from "@/app/utils/techIcons";

function ProjectCard({
  project,
  onClick,
}: {
  project: ProjectItem;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50/50 text-left transition-all duration-200 ease-in-out hover:scale-[1.01] hover:border-neutral-300 hover:bg-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:border-neutral-800 dark:bg-neutral-900/30 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/50 dark:focus:ring-neutral-100 md:p-0"
      aria-label={`${project.name} 상세 보기`}
    >
      {project.image && (
        <div
          className="relative w-full shrink-0 overflow-hidden bg-neutral-200 dark:bg-neutral-800"
          style={{
            aspectRatio: project.imageAspectRatio ?? "1460/834",
          }}
        >
          <img
            src={project.image}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
      )}
      <div className="p-6 md:p-8">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          {project.name}
        </h3>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
          {project.shortDescription}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          <TechIconsOnly stack={project.stack} size={18} />
        </div>
      </div>
    </button>
  );
}

function ProjectDetailModal({
  project,
  onClose,
}: {
  project: ProjectItem;
  onClose: () => void;
}) {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-200"
        aria-hidden="true"
        onClick={onClose}
      />
      <div className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-200 bg-white px-6 py-4 dark:border-neutral-800 dark:bg-neutral-950">
          <h2
            id="project-detail-title"
            className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100"
          >
            {project.name}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-2xl p-2 text-neutral-500 transition-all duration-200 ease-in-out hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
            aria-label="닫기"
          >
            <span className="text-2xl leading-none" aria-hidden="true">
              ×
            </span>
          </button>
        </div>
        {project.image && (
          <div
            className="relative w-full shrink-0 overflow-hidden bg-neutral-100 dark:bg-neutral-900"
            style={{
              aspectRatio: project.imageAspectRatio ?? "1460/834",
            }}
          >
            <img
              src={project.image}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        )}
        <div className="space-y-6 p-6">
          <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{project.period}</span>
            {project.link && (
              <>
                <span aria-hidden="true">·</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-neutral-900 underline underline-offset-2 transition-all duration-200 ease-in-out hover:opacity-80 dark:text-neutral-100"
                >
                  링크 열기
                </a>
              </>
            )}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 py-3 px-4 text-sm font-medium text-neutral-800 transition-all duration-200 ease-in-out hover:border-neutral-300 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800/50 dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-800"
            >
              <span aria-hidden="true">↗</span>
              해당 서비스 페이지로 이동
            </a>
          )}
          <div>
            <h3 className="mb-1 text-sm font-medium text-neutral-500 dark:text-neutral-400">
              설명
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              {project.description}
            </p>
          </div>
          <div>
            <h3 className="mb-1 text-sm font-medium text-neutral-500 dark:text-neutral-400">
              기여도 및 인원 구성
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              {project.contribution}
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
              사용 스택
            </h3>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <TechIcons stack={project.stack} size={20} />
            </div>
            <ul className="list-inside list-disc space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
              {project.stack.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
              주요 업무 및 역할
            </h3>
            <ul className="list-inside list-disc space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
              {project.tasks.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  return (
    <section
      className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 dark:border-neutral-800 dark:bg-neutral-900/30 md:p-8"
      aria-labelledby="projects-heading"
    >
      <h2
        id="projects-heading"
        className="mb-4 text-lg font-semibold text-neutral-800 dark:text-neutral-200"
      >
        프로젝트
      </h2>
      <ul className="grid gap-4 sm:grid-cols-1">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          </li>
        ))}
      </ul>
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

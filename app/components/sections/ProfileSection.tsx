import { profile } from "@/app/data/profile";

export function ProfileSection() {
  return (
    <section
      className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50"
      aria-labelledby="profile-heading"
    >
      <h2
        id="profile-heading"
        className="mb-4 text-lg font-semibold text-neutral-800 dark:text-neutral-200"
      >
        프로필
      </h2>
      <dl className="grid gap-3 sm:grid-cols-1">
        <div>
          <dt className="text-sm text-neutral-500 dark:text-neutral-400">
            이름
          </dt>
          <dd className="font-medium text-neutral-900 dark:text-neutral-100">
            {profile.name}
          </dd>
        </div>
        <div>
          <dt className="text-sm text-neutral-500 dark:text-neutral-400">
            생년월일
          </dt>
          <dd className="font-medium text-neutral-900 dark:text-neutral-100">
            {profile.birthYear}
          </dd>
        </div>
        <div>
          <dt className="text-sm text-neutral-500 dark:text-neutral-400">
            이메일
          </dt>
          <dd>
            <a
              href={`mailto:${profile.email}`}
              className="font-medium text-blue-600 underline decoration-blue-600/30 underline-offset-2 hover:decoration-blue-600 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:decoration-blue-400"
            >
              {profile.email}
            </a>
          </dd>
        </div>
      </dl>
    </section>
  );
}

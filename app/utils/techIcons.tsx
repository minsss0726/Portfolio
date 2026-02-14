"use client";

import {
  SiSpringboot,
  SiSpringsecurity,
  SiSpring,
  SiOpenjdk,
  SiJavascript,
  SiReact,
  SiReactrouter,
  SiThymeleaf,
  SiHibernate,
  SiMariadb,
  SiJquery,
  SiDocker,
  SiNginx,
  SiGradle,
  SiChartdotjs,
  SiGoogleanalytics,
  SiAmazons3,
  SiAmazonwebservices,
  SiOracle,
  SiAxios,
} from "react-icons/si";
import type { IconType } from "react-icons";

/** 각 기술의 공식 브랜드 컬러 (Simple Icons / 공식 가이드 기준) */
const TECH_MAP: {
  pattern: RegExp | string;
  icon: IconType;
  label: string;
  color: string;
}[] = [
  { pattern: /Spring\s*Boot|SpringBoot/i, icon: SiSpringboot, label: "Spring Boot", color: "#6DB33F" },
  { pattern: /Spring\s*Security|SpringSecurity/i, icon: SiSpringsecurity, label: "Spring Security", color: "#6DB33F" },
  { pattern: /Spring\s*(MVC|Legacy|Framework)\b/i, icon: SiSpring, label: "Spring", color: "#6DB33F" },
  { pattern: /React\s*Router/i, icon: SiReactrouter, label: "React Router", color: "#CA4245" },
  { pattern: /\bReact\b/i, icon: SiReact, label: "React", color: "#61DAFB" },
  { pattern: /\bThymeleaf|ThymeLeaf/i, icon: SiThymeleaf, label: "Thymeleaf", color: "#005F0F" },
  { pattern: /\bHibernate|JPA\b|Spring\s*Data\s*JPA/i, icon: SiHibernate, label: "JPA/Hibernate", color: "#59666C" },
  { pattern: /\bMariaDB\b/i, icon: SiMariadb, label: "MariaDB", color: "#003545" },
  { pattern: /\bOracle\b/i, icon: SiOracle, label: "Oracle", color: "#F80000" },
  { pattern: /\bAWS\s*S3|Amazons3|Amazon\s*S3/i, icon: SiAmazons3, label: "AWS S3", color: "#569A31" },
  { pattern: /\bAWS\b|Amazon\s*Web\s*Services/i, icon: SiAmazonwebservices, label: "AWS", color: "#232F3E" },
  { pattern: /\bDocker\b/i, icon: SiDocker, label: "Docker", color: "#2496ED" },
  { pattern: /\bNginx|Ngnix\b/i, icon: SiNginx, label: "Nginx", color: "#009639" },
  { pattern: /\bGradle\b/i, icon: SiGradle, label: "Gradle", color: "#02303A" },
  { pattern: /\bChart\.js|Chartjs\b/i, icon: SiChartdotjs, label: "Chart.js", color: "#FF6384" },
  { pattern: /Google\s*Analytics/i, icon: SiGoogleanalytics, label: "Google Analytics", color: "#E37400" },
  { pattern: /\bAxios\b/i, icon: SiAxios, label: "Axios", color: "#5A29E4" },
  { pattern: /\bjQuery|jquery\b/i, icon: SiJquery, label: "jQuery", color: "#0769AD" },
  { pattern: /\bJavaScript\b|JS\b/i, icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { pattern: /\bJava\b/i, icon: SiOpenjdk, label: "Java", color: "#437291" },
];

function matchTech(text: string): { icon: IconType; label: string; color: string }[] {
  const matched = new Map<IconType, { label: string; color: string }>();
  const lower = text;
  for (const { pattern, icon, label, color } of TECH_MAP) {
    const ok =
      typeof pattern === "string"
        ? lower.includes(pattern.toLowerCase())
        : pattern.test(text);
    if (ok) matched.set(icon, { label, color });
  }
  return Array.from(matched.entries()).map(([icon, { label, color }]) => ({ icon, label, color }));
}

/** 여러 스택 문자열에서 매칭되는 기술 아이콘 목록 (중복 제거, 순서 유지) */
export function getTechIconsFromStack(
  stack: string[]
): { icon: IconType; label: string; color: string }[] {
  if (!Array.isArray(stack) || stack.length === 0) return [];
  const combined = stack.join(" ");
  const list = matchTech(combined);
  const seen = new Set<IconType>();
  return list.filter(({ icon }) => {
    if (seen.has(icon)) return false;
    seen.add(icon);
    return true;
  });
}

const iconSize = 20;

export function TechIcons({
  stack,
  className = "",
  size = iconSize,
}: {
  stack: string[];
  className?: string;
  size?: number;
}) {
  const safeStack = Array.isArray(stack) ? stack : [];
  const techs = getTechIconsFromStack(safeStack);
  if (techs.length === 0) return null;
  return (
    <ul
      className={`flex flex-wrap items-center gap-2 ${className}`.trim()}
      aria-label="사용 기술"
    >
      {techs.map(({ icon: Icon, label, color }) => (
        <li key={label} className="flex items-center gap-1.5">
          <Icon
            size={size}
            style={{ color: color ?? "currentColor" }}
            className="shrink-0"
            title={label}
            aria-hidden
          />
          <span className="sr-only">{label}</span>
        </li>
      ))}
    </ul>
  );
}

/** 아이콘만 표시 (툴팁용 title만) */
export function TechIconsOnly({
  stack,
  className = "",
  size = iconSize,
}: {
  stack: string[];
  className?: string;
  size?: number;
}) {
  const safeStack = Array.isArray(stack) ? stack : [];
  const techs = getTechIconsFromStack(safeStack);
  if (techs.length === 0) return null;
  return (
    <ul
      className={`flex flex-wrap items-center gap-1.5 ${className}`.trim()}
      aria-label="사용 기술"
    >
      {techs.map(({ icon: Icon, label, color }) => (
        <li key={label}>
          <Icon
            size={size}
            style={{ color: color ?? "currentColor" }}
            className="shrink-0"
            title={label}
            aria-hidden
          />
          <span className="sr-only">{label}</span>
        </li>
      ))}
    </ul>
  );
}

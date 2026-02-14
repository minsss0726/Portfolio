/**
 * 수료 교육 데이터
 */

export interface Training {
  period: string;
  courseName: string;
  institution: string;
  summary: string;
  mainLearning: string[];
  additionalLearning: string[];
}

export const trainings: Training[] = [
  {
    period: "2025. 04 ~ 2025. 10",
    courseName: "신한DS 금융SW 아카데미",
    institution: "대한상공회의소",
    summary:
      "Java, HTML/JavaScript, React 기반 웹 서비스 개발과 금융 서비스 전반에 대한 실무 역량을 키우는 약 7개월 과정.",
    mainLearning: [
      "Java 기반 백엔드 및 웹 서비스 개발",
      "HTML/JavaScript 기반 프론트엔드 기초",
      "React 기반 SPA 웹 애플리케이션 개발",
      "금융 도메인 및 금융 서비스 전반 이해",
    ],
    additionalLearning: [
      "Kubernetes(쿠버네티스)를 활용한 컨테이너 오케스트레이션",
      "협업 툴(Git, Jira 등) 활용 및 팀 프로젝트 워크플로우",
      "AI 활용 및 적용 방법",
    ],
  },
];

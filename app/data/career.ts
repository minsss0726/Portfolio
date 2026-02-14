/**
 * 경력 데이터
 */

export interface CareerItem {
  period: string;
  periodMonths: string;
  company: string;
  employmentType: string;
  projectName: string;
  mainRole: string;
  /** 경력기술서 */
  description?: {
    projectName: string;
    projectPeriod: string;
    projectDescription: string;
    contribution: string;
    tasks: string[];
  };
}

export const totalCareerMonths = "총 2개월";

export const careers: CareerItem[] = [
  {
    period: "2025. 12 ~ 2026. 01",
    periodMonths: "2개월",
    company: "퍼스트존",
    employmentType: "프리랜서",
    projectName: "신한DS 금융SW 아카데미 웹사이트 개발",
    mainRole: "웹개발자",
    description: {
      projectName: "신한DS 금융SW 아카데미 웹 서비스 리뉴얼",
      projectPeriod: "2025.12.01 ~ 2026.01.20",
      projectDescription:
        "기존 서비스의 디자인 및 기능 추가를 위한 전반적인 리뉴얼을 통해 성능 개선 및 사용자 경험 향상",
      contribution:
        "팀 리더, 사용자 페이지 백엔드 전담, 관리자 페이지 프론트엔드 전담 (백엔드 1명, 프론트엔드 1명, 풀스택 1명 총 3명)",
      tasks: [
        "SpringBoot 기반의 MVC 서비스 구조 개발",
        "ThymeLeaf 기반의 자바 친화적인 프론트엔드 개발",
        "Spring Security JSESSIONID 기반의 로그인 서비스 개발",
        "Google Analytics 4 연동을 통한 웹 방문자 수, 트래픽 추적",
        "채널톡 연동을 통한 사용자-관리자 소통 연결",
        "JPA를 통한 MariaDB 연동",
        "File 업로드/다운로드 등 서버 파일 관리에 대한 기능 구현",
        "Ngnix를 활용한 Gradle 빌드 기반의 서버 배포",
        "JavaScript/JQuery 기반의 요청/응답 구현",
        "Quill Editor 라이브러리를 활용한 게시물 작성 기능 구현",
      ],
    },
  },
];

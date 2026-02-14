/**
 * 프로젝트 데이터 (PDF 포트폴리오 기준)
 * 추후 이미지, 사용 언어/스택 이미지 등 추가 가능
 */

export interface ProjectItem {
  id: string;
  name: string;
  /** 카드·상세에 표시할 대표 이미지 경로 (public 기준) */
  image?: string;
  /** 이미지 비율 "가로/세로" (미지정 시 1460/834) */
  imageAspectRatio?: string;
  /** 카드에 표시할 짧은 설명 */
  shortDescription: string;
  period: string;
  link?: string;
  /** 상세 팝업용 전체 설명 */
  description: string;
  contribution: string;
  /** 사용 스택 (글 형태, 추후 이미지 대체 가능) */
  stack: string[];
  tasks: string[];
  /** 상세 팝업용 추가 이미지 (예: UI 화면 모음) */
  detailImage?: string;
  /** 상세 팝업용 추가 이미지 여러 장 (detailImage 대신 사용 가능) */
  detailImages?: string[];
  /** 상세 팝업에 표시할 페이지/화면 항목 라벨 (detailImage와 함께 사용) */
  detailPageLabels?: string[];
}

export const projects: ProjectItem[] = [
  {
    id: "shinhan-academy",
    name: "신한DS 금융SW 아카데미 웹 서비스",
    image: "/images/shinhanacademy.png",
    imageAspectRatio: "3024/1442",
    shortDescription:
      "기존 서비스 리뉴얼을 통한 성능 개선 및 사용자 경험 향상",
    period: "2025.12.01 ~ 2026.01.20",
    link: "https://shinhanacademy.com/",
    description:
      "기존 서비스의 디자인 및 기능 추가를 위한 전반적인 리뉴얼을 통해 성능 개선 및 사용자 경험 향상",
    contribution:
      "총 3명 — 팀 리더(클라이언트 소통·요구사항 정리·일정 조율), 사용자 페이지 백엔드 전담, 관리자 페이지 프론트엔드 전담",
    stack: [
      "Spring Boot 3.4.3 (프레임워크)",
      "Spring Security (인증/인가, JWT 확장 가능)",
      "Lombok, Spring Data JPA (Hibernate 6), Thymeleaf",
      "MariaDB JDBC Driver, Google Analytics Data API, Chart.js",
      "Javadoc Plugin (API 문서), Cursor IDE / AI 프롬프트·MCP, Playwright(자동 UI/UX 테스트)",
    ],
    tasks: [
      "SpringBoot 기반의 MVC 서비스 구조 개발",
      "Thymeleaf 기반의 자바 친화적인 프론트엔드 개발",
      "Spring Security JSESSIONID 기반의 로그인 서비스 개발",
      "Google Analytics 4 연동을 통한 웹 방문자 수, 트래픽 추적",
      "채널톡 연동을 통한 사용자-관리자 소통 연결",
      "JPA를 통한 MariaDB 연동",
      "File 업로드/다운로드 등 서버 파일 관리에 대한 기능 구현",
      "Nginx를 활용한 Gradle 빌드 기반의 서버 배포",
      "JavaScript/jQuery 기반의 요청/응답 구현",
      "Quill Editor 라이브러리를 활용한 게시물 작성 기능 구현",
    ],
  },
  {
    id: "ohgoodpay",
    name: "OhgoodPay 오굿페이 (BNPL 결제+숏폼 서비스)",
    image: "/images/ohgoodpay.png",
    imageAspectRatio: "2088/1170",
    shortDescription:
      "후불결제(BNPL)와 숏폼을 결합한 MZ 세대 타겟 웹 서비스",
    period: "2025.09.01 ~ 2025.09.30",
    description:
      "Spring Boot/React 기반의 BNPL+숏폼 웹 서비스. 후불결제 서비스와 숏폼 서비스를 결합하여 MZ 세대들에게 환영받는 서비스를 개발",
    contribution:
      "총 6명 — 팀 리더(역할 분담·일정 수립·프로젝트 주도), 결제 서비스 백엔드·프론트엔드 전담, 정적 리소스 배포 환경 설정 및 관리",
    stack: [
      "Spring Boot (RESTful API)",
      "Spring Data JPA, MariaDB",
      "Spring Security (JWT 토큰 인증)",
      "스케줄링/배치 작업",
      "React (SPA), Axios, Zustand, React Router",
      "Docker, JavaScript SDK (결제 위젯)",
    ],
    tasks: [
      "Spring Boot 기반의 RESTful API 서비스 구조 개발",
      "JPA를 통한 MariaDB 연동 및 데이터베이스 설계",
      "Spring Security 기반의 JWT 토큰 인증 시스템 개발",
      "스케줄링을 통한 배치 작업 처리",
      "React 기반의 SPA(Single Page Application) 개발",
      "Axios를 활용한 RESTful API 통신 구현",
      "Zustand를 활용한 전역 상태 관리",
      "React Router를 통한 다중 레이아웃 라우팅 구조",
      "Docker를 활용한 컨테이너화",
      "JavaScript SDK 패키지 개발 — 결제 위젯",
    ],
    detailImages: [
      "/images/ohgoodpaypage1.png",
      "/images/ohgoodpaypage2.png",
      "/images/ohgoodpaypage3.png",
      "/images/ohgoodpaypage4.png",
      "/images/ohgoodpaypage5.png",
      "/images/ohgoodpaypage6.png",
    ],
  },
  {
    id: "ohgoodfood",
    name: "OhgoodFood 오굿푸드 (멀티샵 서비스)",
    image: "/images/ohgoodfood.png",
    imageAspectRatio: "1460/834",
    shortDescription:
      "폐기 예정 음식 저가 판매·합리적 구매가 가능한 멀티샵 플랫폼",
    period: "2025.06.16 ~ 2025.07.11",
    description:
      "Spring Framework/JSP 기반의 멀티샵 플랫폼. 판매자는 폐기 처리해야 하는 음식들을 정가보다 싼 가격으로 판매해 재고 처리 비용과 불필요한 폐기를 줄일 수 있고, 구매자는 상품을 합리적이고 싼 가격에 구매할 수 있음",
    contribution:
      "총 5명 — 팀 리더(역할 지정·일정 수립·프로젝트 주도), 관리자 페이지 백엔드·프론트엔드 전담, 결제 서비스 백엔드 개발",
    stack: [
      "Spring MVC, JSP/JSTL, Fragment, AJAX",
      "Session 로그인 (JSESSIONID), OAuth2 연동",
      "Kakao Map API (지도·주소 검색·좌표 변환)",
      "Toss Payments (결제·트랜잭션)",
      "MyBatis, MariaDB (HikariCP, 동적 SQL)",
      "AWS S3 (파일 업로드/다운로드), Spring Scheduler",
      "JavaScript/jQuery AJAX, XSS 방지 보안",
    ],
    tasks: [
      "Spring MVC 기반의 서비스 구조 개발 — MVC 아키텍처, 계층 구조, Interceptor 활용",
      "JSP 기반의 프론트엔드 개발 — JSP/JSTL, Fragment, AJAX 활용",
      "Session 기반의 로그인 서비스 개발 — JSESSIONID, OAuth2 연동",
      "Kakao Map API 연동 — 지도 표시, 주소 검색, 좌표 변환",
      "Toss Payments 연동 — 결제 처리, 트랜잭션 관리",
      "MyBatis를 통한 MariaDB 연동 — HikariCP, 동적 SQL",
      "AWS S3 파일 관리 — 업로드/다운로드, 메타데이터 관리",
      "Spring Scheduler 스케줄링 — 예약 확정, 픽업 알림 등 자동화",
      "JavaScript/jQuery AJAX — 비동기 처리, 실시간 데이터 업데이트",
      "XSS 방지 보안 — 필터링, 입력 검증",
    ],
    detailImages: [
      "/images/ohgoodfoodpage1.png",
      "/images/ohgoodfoodpage2.png",
      "/images/ohgoodfoodpage3.png",
    ],
  },
  {
    id: "omok",
    name: "오조은목 (1:1 오목 게임)",
    shortDescription: "Spring Legacy·WebSocket 기반 실시간 1:1 오목 웹 서비스",
    period: "2025.05.25 ~ 2025.05.30",
    description:
      "Spring Legacy, WebSocket 기반의 실시간 1:1 오목 게임 웹 서비스",
    contribution:
      "총 5명 — 팀 리더(업무 분담·일정 관리), 게임 관련 백엔드·프론트엔드 전담, WebSocket 구현",
    detailImage: "/images/ohgoodomokpage1.png",
    detailPageLabels: [
      "인트로",
      "회원가입",
      "방 목록",
      "방 만들기",
      "게임",
      "Win 팝업",
      "Lose 팝업",
      "랭킹",
      "전적 조회",
      "프로필 변경",
    ],
    stack: [
      "Spring Legacy, Servlet (@WebServlet) RESTful API",
      "Service-DAO-Model 계층 분리, JSP/EL/JSTL",
      "HttpSession (로그인·인증)",
      "ServerEndpoint WebSocket, 방별 엔드포인트 /GamePlay/{roomId}",
      "ConcurrentHashMap (방별 세션 관리), JSON/Gson",
      "Oracle JDBC, PreparedStatement, jQuery AJAX",
    ],
    tasks: [
      "Spring Legacy 기반 웹 애플리케이션 아키텍처 설계 및 구현",
      "Servlet 기반 컨트롤러(@WebServlet)를 통한 RESTful API 엔드포인트 개발",
      "Service-DAO-Model 계층 분리 구조로 비즈니스 로직과 데이터 접근 계층 분리",
      "JSP를 활용한 동적 웹 페이지 생성 및 서버 사이드 데이터 바인딩 — EL과 JSTL 사용",
      "HttpSession을 활용한 사용자 로그인 상태 관리 및 인증 처리",
      "ServerEndpoint 기반 실시간 통신 구현",
      "방별 동적 WebSocket 엔드포인트(/GamePlay/{roomId}) 생성 및 세션 관리",
      "ConcurrentHashMap을 통한 멀티스레드 환경에서의 방별 클라이언트 세션 관리",
      "JSON 메시지 프로토콜 설계 및 Gson을 활용한 직렬화/역직렬화 처리",
      "비동기 메시지 브로드캐스팅을 통한 다중 클라이언트 동기화",
      "Oracle JDBC Driver를 활용한 데이터베이스 연결 풀 관리(DButil 클래스)",
      "PreparedStatement를 통한 SQL Injection 방지 및 파라미터 바인딩 처리",
      "jQuery를 활용한 AJAX 비동기 요청/응답 처리(회원가입, 프로필 업데이트 등)",
    ],
  },
];

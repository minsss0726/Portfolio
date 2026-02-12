# 포트폴리오 웹사이트

Next.js 기반 개발자 포트폴리오 웹사이트입니다.

## 기술 스택

- **프레임워크**: Next.js 15 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **배포**: Vercel (권장)

## 시작하기

### 개발 서버 실행

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
npm run build
npm start
```

## 프로젝트 구조

```
app/
  ├── layout.tsx      # 루트 레이아웃
  ├── page.tsx        # 홈 페이지
  └── globals.css     # 전역 스타일
components/           # 컴포넌트 (추가 예정)
lib/                  # 유틸리티 함수 (추가 예정)
data/                 # 정적 데이터 (추가 예정)
```

## 개발 가이드

자세한 개발 가이드는 `.cursor/rules/PORTFOLIO.md`를 참고하세요.

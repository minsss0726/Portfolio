/**
 * 자격증/수료증 데이터
 */

export interface Certification {
  name: string;
  acquiredAt: string;
  issuer: string;
}

export const certifications: Certification[] = [
  {
    name: "SQL 개발자",
    acquiredAt: "2025. 06",
    issuer: "한국데이터산업진흥원",
  },
  {
    name: "정보처리산업기사",
    acquiredAt: "2023. 09",
    issuer: "한국산업인력공단",
  },
  {
    name: "MOS Excel",
    acquiredAt: "2022. 12",
    issuer: "Microsoft",
  },
  {
    name: "MOS PowerPoint",
    acquiredAt: "2022. 10",
    issuer: "Microsoft",
  },
];

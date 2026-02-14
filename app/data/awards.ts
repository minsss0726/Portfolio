/**
 * 수상 내역 데이터
 */

export interface Award {
  year: string;
  name: string;
  issuer: string;
  reason: string;
}

export const awards: Award[] = [
  {
    year: "2025",
    name: "KDT 5기 개인 공로상",
    issuer: "대한상공회의소",
    reason:
      "신한DS 금융SW 아카데미 5기 교육과정에서 모범적인 자세와 적극적인 활동으로 기여한 바가 크므로 상장과 부상 수여",
  },
];

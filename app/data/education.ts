/**
 * 학력 데이터
 */

export interface Education {
  school: string;
  major: string;
  graduationYear: string;
  gpa: string;
}

export const education: Education = {
  school: "인덕대학교(3년제)",
  major: "컴퓨터전자공학과",
  graduationYear: "24년 2월 졸업",
  gpa: "4.0/4.5",
};

import styled from '@emotion/styled';

export const Heading1 = styled.p`
  /* 제목: Playfair + Noto Serif KR */
  font-family: var(--font-heading);
  font-weight: 700;            /* 600~700 권장 */
  font-size: 1.75rem;          /* 기존 1.5rem → 살짝 키워 우아하게 */
  letter-spacing: 0.2px;
  margin: 10px;
  color: #c9a646;              /* 원래 색 유지. 필요시 골드/다른 색으로 바꿔도 OK */
  white-space: pre-line;
`;

export const Heading2 = styled.p`
  /* 부제/섹션 소제목: 본문 폰트로 정리 or heading로 가도 OK */
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1.125rem;
  letter-spacing: 0.1px;
  margin: 10px;
  white-space: pre-line;
`;

export const PointTitle = styled.p`
  /* 포인트 타이틀도 제목 폰트로 통일 */
  font-family: var(--font-heading);
  font-weight: 700;
  line-height: 1.1;
  margin: 0;
  color: #c9a646;
  letter-spacing: 0.2px;
  white-space: pre-line;
`;

export const Paragraph = styled.p`
  /* 본문: Noto Serif KR */
  font-family: var(--font-body);
  font-weight: 400;
  line-height: 1.9rem;         /* 가독성 */
  letter-spacing: 0.1px;
  white-space: pre-line;
`;

export const Caption = styled.p<{ textAlign?: string }>`
  /* 캡션/보조 텍스트 */
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 0.9375rem;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  letter-spacing: 0.1px;
  white-space: pre-line;
`;

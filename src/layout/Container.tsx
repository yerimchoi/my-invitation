import styled from '@emotion/styled';

const Container = styled.div`
  /* 폭 제한 + 중앙 정렬 */
  width: min(85vw, 500px);
  margin: 24px auto 80px;

  /* 반투명 유리 카드 느낌 */
  background: rgba(255, 255, 255, 0.88);  /* 투명도 0.88: 0.80~0.92 사이로 취향 조절 */
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.12);
  backdrop-filter: saturate(115%) blur(4px); /* 배경 비침 + 약간의 블러 */
  -webkit-backdrop-filter: saturate(115%) blur(4px); /* iOS 사파리 대응 */

  /* 경계가 조금 더 또렷하길 원하면 보더 추가 */
  /* border: 1px solid rgba(255, 255, 255, 0.6); */

  padding: 16px;
  @media (min-width: 500px) { padding: 24px; }

  /* 투명 효과를 싫어하는 사용자 접근성 옵션 대응 */
  @media (prefers-reduced-transparency: reduce) {
    background: #ffffff;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
`;

export default Container;

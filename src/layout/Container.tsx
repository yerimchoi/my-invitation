import styled from '@emotion/styled';

const Container = styled.div`
  /* 폭 제한 + 중앙 정렬 */
  width: min(85vw, 500px);
  margin: 24px auto 80px;

  /* 불투명 흰색 카드 */
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.12);

  /* 내부 여백 */
  padding: 16px;

  @media screen and (min-width: 500px) {
    padding: 24px;
  }
`;

export default Container;

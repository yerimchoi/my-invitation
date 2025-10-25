// src/layout/Container.tsx
import styled from '@emotion/styled';

const Container = styled.div`
  width: min(85vw, 500px);
  margin: 24px auto 80px;

  /* 투명도 0.5: 50% 불투명 */
  background: rgba(255, 255, 255, 0.3);

  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
  backdrop-filter: saturate(115%) blur(4px);
  -webkit-backdrop-filter: saturate(115%) blur(4px);

  padding: 16px;
  @media (min-width: 500px) {
    padding: 24px;
  }
`;
export default Container;

import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/03.jpg'

const Main = () => {
  const { greeting } = data;
  return (
    <div>
      <MainImg src={mainImg} />
      <MainTitle>{greeting.title}</MainTitle>
      <SubTitle>{greeting.eventDetail}</SubTitle>
    </div>
  );
};

export default Main;

const MainImg = styled.img`
  border-radius: 200px 200px 0 0;
  width: 90%;
  max-width: 450px;
  padding-top: 20px;
`;

const MainTitle = styled.p`
  font-family: var(--font-heading);  /* "Playfair Display", "Noto Serif KR", serif */
  font-weight: 700;                  /* 600~700 권장 */
  font-size: 2rem;
  letter-spacing: 0.2px;
  color: #2F2120;
  line-height: 120%;
  white-space: pre-line;
`;

const SubTitle = styled.p`
  font-family: var(--font-body);      /* "Noto Serif KR", serif */
  font-weight: 400;
  font-size: 1.1rem;
  letter-spacing: 0.1px;
  color: #2F2120;
  line-height: 140%;
  white-space: pre-line;
`;
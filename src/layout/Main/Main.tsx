import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/03.jpg'

const And = styled.span`
  font-family: var(--font-and); // Petit Formal Script 사용
  font-size: 1.2rem;           // 이름보다 약간 작게
  margin: 0 1.0rem;
`;

const Main = () => {
  const { greeting } = data;
  const [groom, bride] = greeting.title.split('|').map((s) => s.trim());
  return (
    <div>
      <MainImg src={mainImg} loading="eager" fetchPriority="high" alt="main" />
      <MainTitle className="scroll-text">
        {groom}
        <And>and</And>
        {bride}
      </MainTitle>
      <SubTitle className="scroll-text">{greeting.eventDetail}</SubTitle>
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
  font-family: var(--font-body); 
  font-weight: 400;                 
  font-size: 2rem;
  letter-spacing: 0.2px;
  color: #2F2120;
  line-height: 120%;
  white-space: pre-line;
`;

const SubTitle = styled.p`
  font-family: var(--font-body);     
  font-weight: 400;
  font-size: 1.1rem;
  letter-spacing: 0.1px;
  color: #2F2120;
  line-height: 140%;
  white-space: pre-line;
`;
import { ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import ExpandMore from '@/assets/icons/expand_more.svg?react';

interface IAccordionProps {
  title: string;
  children: ReactNode;
}
const Accordion = ({ title, children }: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper>
      <AccordionHeader isActive={isOpen} onClick={toggleAccordion}>
        <HeaderTitle>{title}</HeaderTitle>
        <IconWrap aria-hidden>
          <ExpandMore fill="#e88ca6" />
        </IconWrap>
      </AccordionHeader>

      {isOpen && <AccordionContent>{children}</AccordionContent>}
    </AccordionWrapper>
  );
};

export default Accordion;

const AccordionWrapper = styled.div`
  border: 1px solid #e6ece1;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const AccordionHeader = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e6ece1;
  padding: 0 15px;
  cursor: pointer;
  `;

const HeaderTitle = styled.p`
  font-family: var(--font-heading);   /* 제목 = Playfair + Noto Serif KR */
  font-weight: 700;
  font-size: 1.125rem;
  letter-spacing: 0.2px;
  color: #2F2120;                    /* 조금 더 차분한 본문색 */
  margin: 12px 0;
`;

const IconWrap = styled.span<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isActive ? 'rotate(180deg)' : undefined)};
`;

const AccordionContent = styled.div`
  font-family: var(--font-body);
  font-size: 14px;
  text-align: justify;
  padding: 10px 20px;
  background-color: #ffffff;
`;

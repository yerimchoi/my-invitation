import styled from '@emotion/styled';

export const Heading1 = styled.p`
  font-family: var(--font-body);
  font-weight: 400;            
  font-size: clamp(1.4rem, 1.5rem, 1.6rem);          
  letter-spacing: 0.2px;
  margin: 10px;
  color: #c9a646;              
  white-space: pre-line;
`;

export const Heading2 = styled.p`
  font-family: var(--font-body);
  font-weight: 400;
  font-size: clamp(1.0rem, 1.1rem, 1.123rem);
  letter-spacing: 0.1px;
  margin: 10px;
  white-space: pre-line;
`;

export const PointTitle = styled.p`
  font-family: var(--font-body);
  font-size: clamp(0.8rem, 0.9rem, 1.0rem);
  font-weight: 400;
  line-height: 1.1;
  margin: 0;
  color: #c9a646;
  letter-spacing: 0.2px;
  white-space: pre-line;
`;

export const Paragraph = styled.p`
  font-family: var(--font-body);
  font-size: clamp(0.8rem, 0.9rem, 1.0rem);
  font-weight: 400;
  line-height: 1.9rem;        
  letter-spacing: 0.1px;
  white-space: pre-line;
`;

export const Caption = styled.p<{ textAlign?: string }>`
  font-family: var(--font-body);
  font-weight: 300;
  font-size: clamp(0.8rem, 0.9rem, 1.0rem);
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  letter-spacing: 0.1px;
  white-space: pre-wrap;
  tab-size: 2;
`;

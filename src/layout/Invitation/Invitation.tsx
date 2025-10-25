import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';

const Invitation = () => {
  const { greeting } = data;
  return (
    <InvitationWrapper>
      <Paragraph className="scroll-text">{greeting.message}</Paragraph>
      <Host />
      <Caption textAlign={'center'} className="scroll-text">{greeting.eventDetail}</Caption>
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

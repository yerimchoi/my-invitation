import styled from '@emotion/styled';
import { Heading1 } from '@/components/Text.tsx';
import Wrapper from '@/components/Wrapper.tsx';
import Account from '@/layout/Account/Account.tsx';
import Container from '@/layout/Container.tsx';
import GalleryWrap from '@/layout/Gallery/GalleryWrap.tsx';
import Invitation from '@/layout/Invitation/Invitation.tsx';
import Location from '@/layout/Location/Location.tsx';
import Main from '@/layout/Main/Main.tsx';

const BackgroundLayer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;              /* 배경 */
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ContentStack = styled.div`
  position: relative;
  z-index: 1;              /* 콘텐츠는 배경 위 */
`;

function App() {
  const bgUrl = `${import.meta.env.BASE_URL}background.png`;

  return (
    <>
      <BackgroundLayer style={{ backgroundImage: `url(${bgUrl})` }} />

      <ContentStack>
        <Container>
          <Wrapper>
            <Main />
          </Wrapper>

          <Wrapper>
            <Heading1>모시는 글</Heading1>
            <Invitation />
          </Wrapper>

          <Wrapper>
            <Heading1>Gallery</Heading1>
            <GalleryWrap />
          </Wrapper>

          <Wrapper>
            <Heading1>마음 전하실 곳</Heading1>
            <Account />
          </Wrapper>

          <Wrapper>
            <Heading1>오시는 길</Heading1>
            <Location />
          </Wrapper>
        </Container>
      </ContentStack>
    </>
  );
}

export default App;

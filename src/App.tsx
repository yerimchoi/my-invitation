import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Heading1 } from '@/components/Text.tsx';
import Wrapper from '@/components/Wrapper.tsx';
import Account from '@/layout/Account/Account.tsx';
import Container from '@/layout/Container.tsx';
import FloatingBar from '@/layout/FloatingBar/FloatingBar.tsx';
import GalleryWrap from '@/layout/Gallery/GalleryWrap.tsx';
import Guestbook from '@/layout/Guestbook/Guestbook.tsx';
import Invitation from '@/layout/Invitation/Invitation.tsx';
import Location from '@/layout/Location/Location.tsx';
import Main from '@/layout/Main/Main.tsx';

const BackgroundLayer = styled.div`
  position: fixed;
  inset: 0; /* top:0; right:0; bottom:0; left:0; */
  z-index: -1; /* 컨텐츠 뒤로 */
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
`;

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (galleryRef.current) {
        const { offsetTop } = galleryRef.current;
        const scrollPosition = window.scrollY;
        setIsVisible(scrollPosition >= offsetTop);
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ✅ GitHub Pages 서브경로에서도 안전한 경로
  const bgUrl = `${import.meta.env.BASE_URL}background.png`;

  return (
    <>
      {/* 전체 페이지 배경 레이어 */}
      <BackgroundLayer style={{ backgroundImage: `url(${bgUrl})` }} />

      {/* 불투명 흰색 카드 컨테이너(이미 잘 설정되어 있음) */}
      <Container>
        <Wrapper>
          <Main />
        </Wrapper>
        <Wrapper>
          <Heading1>모시는 글</Heading1>
          <Invitation />
        </Wrapper>
        <Wrapper ref={galleryRef}>
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
        <Wrapper>
          <Heading1>신랑 신부에게</Heading1>
          <Guestbook />
        </Wrapper>
        <FloatingBar isVisible={isVisible} />
      </Container>
    </>
  );
}

export default App;

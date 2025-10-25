// src/hooks/useScrollAnimation.ts
import { useEffect } from 'react';

export const useScrollAnimation = (selector: string) => {
  useEffect(() => {
    // 스크롤 대상 요소들 선택
    const elements = document.querySelectorAll<HTMLElement>(selector);
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // 요소가 화면에 10% 이상 보이면 active 클래스 추가
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach(el => observer.observe(el));
    return () => {
      observer.disconnect();
    };
  }, [selector]);
};

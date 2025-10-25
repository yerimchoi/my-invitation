import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// 터치 종료 시 두 번 탭 확대 방지
let lastTouchEnd = 0;
document.addEventListener(
  'touchend',
  function (e) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      e.preventDefault();
    }
    lastTouchEnd = now;
  },
  { passive: false }
);

// 핀치줌 제스처 시작 시 기본 동작 차단
document.addEventListener(
  'gesturestart',
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

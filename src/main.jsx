import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' 

// 이 파일은 index.css를 정상적으로 임포트하고 있습니다.
// UI가 깨지는 문제는 vite.config.js 또는 src/index.css의 설정 문제입니다.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 도메인(art-design.kr) 연결 시 경로는 루트(/)가 되어야 합니다.
  base: "/", 
})
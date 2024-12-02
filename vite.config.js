import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // 개발 서버 실행 시 브라우저 자동 열기
    port: 3001, // port 3001 에서 열기
  },
});

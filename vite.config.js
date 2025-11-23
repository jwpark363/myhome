import { defineConfig } from 'vite'

const repoName = 'myhome'; 
export default defineConfig({
  // 배포할 서브 경로 설정: /<YOUR_REPO_NAME>/
  base: `/${repoName}/`,
})
# 1. Node.js 기반 이미지 선택
FROM node:18

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. package.json, package-lock.json 복사
COPY package.json package-lock.json ./

# 4. 의존성 설치
RUN npm install

# 5. 소스 코드 복사
COPY . .

# 6. 포트 노출
EXPOSE 3000

# 7. 개발 서버 실행
CMD ["npm", "run", "dev"]
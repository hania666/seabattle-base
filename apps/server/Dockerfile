FROM node:20-alpine
WORKDIR /app
COPY apps/server/package*.json ./
RUN npm install
COPY apps/server/ .
RUN npm run build
EXPOSE 3001
CMD ["node", "dist/index.js"]

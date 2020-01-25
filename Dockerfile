FROM node:13.7.0-alpine

WORKDIR /server

ADD package*.json ./
ADD src ./src
ADD tsconfig.json ./

ENV NODE_ENV=production

RUN npm i

RUN npm run build

CMD node dist/index.js

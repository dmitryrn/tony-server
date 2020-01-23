FROM node:13.7.0-alpine

ENV NPM_CONFIG_LOGLEVEL notice

WORKDIR /app

ADD package*.json ./
ADD src ./src
ADD tsconfig.json ./

RUN npm i

RUN npm run build

CMD node dist/index.js

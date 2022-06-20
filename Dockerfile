FROM node:16.15 AS development

WORKDIR /app

ARG PORT

COPY package*.json ./

RUN npm install --location=global @nestjs/cli

RUN npm install

COPY . .

EXPOSE 8000

CMD npm run start:dev

FROM node:16.15 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY . .

RUN npm run build

CMD ["node", "dist-main"]
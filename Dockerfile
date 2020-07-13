FROM node:lts AS builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src

#Login in github
ARG github_PAT
RUN docker login https://docker.pkg.github.com -u gabmetal --password bf0c709a0c4345f36e89a3183a91a3ae75df0ef9

RUN npm install
RUN npm run build

FROM node:lts-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
COPY knexfile.js ./

RUN npm install --production
EXPOSE $APP_PORT

COPY --from=builder /usr/src/app/dist ./dist

CMD ["npm","start"]

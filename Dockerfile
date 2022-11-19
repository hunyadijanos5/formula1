# ---- Base Node ----
# FROM node:alpine
FROM sandrokeil/typescript as builder
ARG NODE_ENV
COPY package*.json .

WORKDIR /app
COPY *.lock /app
COPY *.json /app/
COPY tsconfig.json /app/tsconfig.prod.json

# Bundle app source
COPY src /app/src
COPY server /app/server
RUN yarn install
COPY . .
RUN yarn build
RUN tsc ./server/index.ts --outDir ./build/server

CMD ["node", "./build/server/index.js"]

EXPOSE 9997:80

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
RUN yarn react-build
RUN tsc ./server/index.ts --outDir ./build/server
RUN cp ./server/drivers.json ./build/server/drivers.json

CMD ["node", "./build/server/index.js"]

EXPOSE 80

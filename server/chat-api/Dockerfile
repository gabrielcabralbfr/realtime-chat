FROM node:12.11.1-alpine

WORKDIR /app

COPY . .

ENV PORT=3333

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]
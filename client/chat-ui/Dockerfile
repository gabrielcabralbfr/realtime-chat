FROM node:12.11.1-alpine

WORKDIR /app

COPY . .

ENV PORT=3000

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]
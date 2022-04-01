FROM node:14.19-alpine3.14

WORKDIR /app/nodejs

COPY package*.json /app/nodejs/

RUN npm install

COPY . .

EXPOSE 50505

CMD [ "node", "index.js" ]
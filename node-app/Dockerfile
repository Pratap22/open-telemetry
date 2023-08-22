FROM node:16

WORKDIR /my-app

COPY yarn.lock package.json ./

RUN npm install

COPY . .

CMD ["node", "index.js"]
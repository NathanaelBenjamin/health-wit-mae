FROM node:latest

WORKDIR /usr/client

COPY package.json .
RUN npm install
RUN npm install -g serve

COPY . .

RUN npm run build

CMD [ "server", "-s", "build" ]

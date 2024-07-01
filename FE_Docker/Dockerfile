FROM node:18

WORKDIR /PORTFOLIO

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "dev"]
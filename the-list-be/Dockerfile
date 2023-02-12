FROM node:18.14

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

CMD ["npm", "run", "start"]
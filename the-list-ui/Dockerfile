FROM node:18.14 AS build

ARG REACT_APP_BACKEND_URL

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build


FROM nginx:1.23

COPY --from=build build /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY docker/htpasswd /etc/nginx/.htpasswd

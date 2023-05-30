FROM node:16.16.0 AS build 
WORKDIR /identify-fe
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build
# Setup NGINX
FROM nginx:1.19
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /identify-fe/build /usr/share/nginx/html
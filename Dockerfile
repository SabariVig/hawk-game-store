FROM node:alpine AS build

WORKDIR /app/react

COPY  package*.json .

RUN npm install && npm build


FROM nginx:alpine

COPY  --from=build /app/react/build/  /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/conf.d


EXPOSE 80

CMD ["nginx" ,"-g" ,"daemon off;"]


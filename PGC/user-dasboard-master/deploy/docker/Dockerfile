FROM node:10.16.0 as build-stage

WORKDIR /app

COPY package.json ./
RUN npm install
COPY ./ ./

RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY --from=build-stage /app/deploy/ssl /

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

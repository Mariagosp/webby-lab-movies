FROM node:20 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine AS runner

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

COPY start.sh /start.sh
RUN chmod +x /start.sh

ENV API_URL=http://localhost:8000/api/v1/movies

EXPOSE 80

CMD ["/start.sh"]
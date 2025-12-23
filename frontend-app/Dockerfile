FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
# Use JSON syntax (square brackets) to handle the space in "angular app"
COPY --from=build ["/app/dist/*", "/usr/share/nginx/html"]
EXPOSE 80

# Stage 1: Build the Vite app
FROM node:18-alpine AS build
WORKDIR /frontend
COPY package*.json ./
RUN npm install
COPY . . 
RUN npm run build

# Stage 2: Serve the Vite app with NGINX
FROM nginx:alpine
COPY --from=build /frontend/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

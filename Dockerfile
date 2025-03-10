# Build stage
FROM node:18-alpine as build

WORKDIR /app

# Copy package files from portfolio-site
COPY portfolio-site/package*.json ./

# Install dependencies
RUN npm install

# Copy project files from portfolio-site
COPY portfolio-site/ ./

# Build the project
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 
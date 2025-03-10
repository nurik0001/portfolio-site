# Build stage
FROM node:18-alpine as build

WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build

# Этап для запуска приложения - используем этот образ для Railway
FROM node:18-alpine

WORKDIR /app

# Копируем собранные файлы и зависимости
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./

# Открываем порт
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"] 
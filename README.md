# Portfolio Site

Современный веб-сайт портфолио, разработанный с использованием React, Vite и Tailwind CSS.

## Требования

- Node.js 18+
- npm или yarn
- Docker и Docker Compose (для контейнеризации)

## Локальная разработка

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev
```

## Запуск с использованием Docker

### Разработка

```bash
# Сборка образов
npm run docker:build

# Запуск контейнеров
npm run docker:up

# Просмотр логов
npm run docker:logs

# Остановка контейнеров
npm run docker:down
```

### Продакшен

```bash
# Сборка и запуск для продакшена
docker-compose -f docker-compose.prod.yml up -d --build

# Остановка
docker-compose -f docker-compose.prod.yml down
```

## Деплой на Railway

1. Убедитесь, что у вас есть аккаунт на [Railway](https://railway.app/)
2. Установите Railway CLI: `npm i -g @railway/cli`
3. Авторизуйтесь: `railway login`
4. Инициализируйте проект: `railway init`
5. Выполните деплой: `railway up`

## Структура проекта

- `src/` - исходный код приложения
- `public/` - статические файлы
- `nginx/` - конфигурация Nginx
- `docker-compose.yml` - конфигурация Docker для разработки
- `docker-compose.prod.yml` - конфигурация Docker для продакшена
- `Dockerfile` - инструкции для сборки Docker образа

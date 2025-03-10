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

### Вариант 1: Через веб-интерфейс (рекомендуется)

1. Зарегистрируйтесь на [Railway](https://railway.app/)
2. Создайте новый проект, выбрав "Deploy from GitHub repo"
3. Подключите свой GitHub аккаунт и выберите репозиторий
4. Railway автоматически определит, что это Node.js проект и выполнит деплой

### Вариант 2: Через Railway CLI

1. Установите Railway CLI: `npm i -g @railway/cli`
2. Авторизуйтесь: `railway login`
3. Инициализируйте проект: `railway init`
4. Выполните деплой: `railway up`

### Решение проблем с деплоем на Railway

Если возникают проблемы с деплоем:

1. Убедитесь, что в корне проекта есть файлы `Procfile` и `nixpacks.toml`
2. Проверьте, что скрипт `start` в package.json настроен правильно
3. Проверьте логи деплоя в Railway Dashboard

## Структура проекта

- `src/` - исходный код приложения
- `public/` - статические файлы
- `nginx/` - конфигурация Nginx
- `docker-compose.yml` - конфигурация Docker для разработки
- `docker-compose.prod.yml` - конфигурация Docker для продакшена
- `Dockerfile` - инструкции для сборки Docker образа
- `Procfile` - инструкции для Railway
- `nixpacks.toml` - конфигурация для Railway

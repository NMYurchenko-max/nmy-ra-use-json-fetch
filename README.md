# Учебный проект: Пользовательский хук 'useJsonFetch' для HTTP-запросов

## Тема: Хуки в React

## Публикация

[![CI](https://github.com/NMYurchenko-max/nmy-ra-use-json-fetch/actions/workflows/web.yml/badge.svg)](https://github.com/NMYurchenko-max/nmy-ra-use-json-fetch/actions/workflows/web.yml)

[Деплой](https://nmyurchenko-max.github.io/nmy-ra-use-json-fetch/)


Сервер данного приложения:
REST‑сервер (Express) опубликован на Render:
- Service ID: srv-d34hqvbipnbc73808v20
- Публичный URL (prod): https://nmy-ra-use-json-backend.onrender.com
- Личный URL-адрес для запуска развёртывания на этом сервере. Не забудьте сохранить его в секрете.: https://api.render.com/deploy/srv-d34hqvbipnbc73808v20?key=o0sDQ_7eha4

## [Описание задачи](https://github.com/netology-code/ra16-homeworks/blob/ra-51/hooks-context/use-json-fetch/README.md)


Использование хука :

`const [data, loading, error] = useJsonFetch(url, opts);`

Логика:

1.  GET http://localhost:7070/data — успешное получение данных;
    - data — данные в формате JSON;
    - loading — true, если данные еще не получены;
    - error — null, если данные получены успешно;

## Структура 

```tsx


```

## Использование проекта

Клонируйте репозиторий

```bash
git clone https://github.com/NMYurchenko-max/nmy-ra-use-effect.git
```

Установите зависимости

```bash
npm install
```

Запустите сервер разработки

```bash
npm run dev
```

Соберите для продакшена

```bash
npm run build
```

## Авторы

N.Yurchenko
copyright (c) 2025 N.Yurchenko
[ISC License](LICENSE)

[NMYurchenko-max](https://github.com/NMYurchenko-max)


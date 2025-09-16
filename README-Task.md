useJsonFetch
=========
Реализуйте пользовательский хук useJsonFetch, который позволяет с помощью fetch осуществлять HTTP-запросы.

Использование этого хука должно выглядеть следующим образом:
```js
const [данные, загрузка, ошибка] = useJsonFetch(url, опции);
```
где:

* `data` — данные, полученные после response.json(), не промис, а именно данные;
* `error` — ошибка: ошибка сети, ошибка ответа, если код не 20x, ошибка парсинга, если получен не JSON;
* `loading` — логический флаг, сигнализирующий о том, что загрузка идёт.

Покажите, как использовать этот хук, на примере трёх компонентов, каждый из которых отправляет запросы по следующим адресам:

* GET http://localhost:7070/data — успешное получение данных;
* GET http://localhost:7070/error — получение ошибки 500;
* GET http://localhost:7070/loading — индикатор загрузки.

Серверную часть возьмите из каталога backend (Реализовано).

```js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(
  bodyParser.json({
    type(req) {
      return true;
    },
  })
);
app.use(function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});

app.get("/data", async (req, res) => {
  res.send(JSON.stringify({ status: "ok" }));
});
app.get("/error", async (req, res) => {
  res.status(500).send(JSON.stringify({ status: "Internal Error" }));
});
app.get("/loading", async (req, res) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
  res.send(JSON.stringify({ status: "ok" }));
});

const port = process.env.PORT || 7070;
app.listen(port, () => console.log(`The server is running on port ${port}.`));
``;
```

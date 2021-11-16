const express = require("./node_modules/express")
const { exec, execSync } = require("child_process")
const fs = require("fs")
const app = express()
const fetch = require("./node_modules/node-fetch")

app.listen(3999, () => console.log("site deployed to port 3999"))

const date = new Date()
date.setHours(date.getHours() + 2)

const day = date.getDate()
const month =
  date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
const hour = date.getHours()
const min = date.getMinutes()

const build = {
  status: "В ожидании сборки.",
  last_action: `Сервер запущен ${day}.${month} в ${hour}:${min}.`,
  result: "Успешно.",
}

app.post("/build", (req, res) => {
  if (build.status !== "В ожидании сборки.") res.sendStatus(409)
  else {
    try {
      fetch("http://admin.krypton.ru/api/products/add")
      build.last_action = "Отправлен сигнал в админку"
    } catch {
      build.last_action = "Сигнал в админку отправить не удалось"
    } finally {
      build.status = "Собирается."
      res.sendStatus(200)

      execSync("git reset --hard")
      execSync("git pull")
      execSync("npm install")
      execSync("npm run clean")

      exec("npm run build", err => {
        const date = new Date()
        date.setHours(date.getHours() + 2)

        const day = date.getDate()
        const month =
          date.getMonth() < 9
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1
        const hour = date.getHours()
        const min = date.getMinutes()

        if (err) {
          build.status = "В ожидании сборки."
          build.last_action = `Обновление сайта ${day}.${month} в ${hour}:${min}.`
          build.result = `Ошибка (code:${err.code}, message: ${err.message}).`
        } else {
          fs.renameSync("./public-finish", "./oldVersion")
          fs.renameSync("./public", "./public-finish")
          fs.rmSync("./oldVersion", { recursive: true, force: true })

          build.status = "В ожидании сборки."
          build.last_action = `Обновление сайта ${day}.${month} в ${hour}:${min}.`
          build.result = `Успешно.`
        }
      })
    }
  }
})

app.get("/status", (req, res) => {
  res.send(`
  Состояние сейчас: ${build.status} <br>
  Последнее завершенное действие: ${build.last_action} <br>
  Результат: ${build.result}`)
})

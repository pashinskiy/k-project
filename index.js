const express = require("./node_modules/express")
const { exec, execSync } = require("child_process")
const fs = require("fs")
const app = express()

app.listen(3999, () => console.log("site deployed to port 3999"))

const build = {
  status: "В ожидании. ",
  message: "Сборок не было",
}

app.post("/build", (req, res) => {
  if (build.status === "В ожидании. ") {
    build.status = "Собирается. "
    res.sendStatus(200)

    execSync("git pull")
    execSync("npm install")
    execSync("npm run clean")

    exec("npm run build", err => {
      const date = new Date()
      date.setHours(date.getHours() + 2)

      const day = date.getDate()
      const month =
        date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
      const hour = date.getHours()
      const min = date.getMinutes()

      if (err) {
        build.status = "В ожидании. "
        build.message = `
         Последнее обновление: ${day}.${month} в ${hour}:${min}. Результат: Ошибка (code:${err.code}, message: ${err.message}). 
        `
      } else {
        fs.renameSync("./public-finish", "./oldVersion")
        fs.renameSync("./public", "./public-finish")
        fs.rmSync("./oldVersion", { recursive: true, force: true })

        build.status = "В ожидании. "
        build.message = `
          Последнее обновление: ${day}.${month} в ${hour}:${min}. Результат: Успешно.
        `
      }
    })
  } else {
    res.sendStatus(409)
  }
})

app.get("/status", (req, res) => {
  res.send(build.status + build.message)
})

const express = require("./node_modules/express")
const { exec } = require("child_process")
const fs = require("fs")
const app = express()

app.listen(8888, () => console.log("site deployed to port 8888"))

const build = {
  status: "Готово",
  message: "",
}

app.post("/build", (req, res) => {
  if (build.status === "Готово") {
    build.status = "В процессе."
    build.message = " Cобирается"
    res.sendStatus(200)
    exec("npm run build", () => {
      if (fs.existsSync("./public-finish")){
        fs.renameSync("./public-finish", "./oldVersion")}

      fs.renameSync("./public", "./public-finish")

      if (fs.existsSync("./oldVersion")) fs.rmdirSync("./oldVersion")

      const date = new Date()
      const day = date.getDate()
      const month =
        date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
      const hour = date.getHours()
      const min = date.getMinutes()
      build.status = "Готово"
      build.message = `. Последнее обновление завершено: ${day}.${month} в ${hour}:${min}`
    })
  } else {
    res.sendStatus(409)
  }
})

app.get("/status", (req, res) => {
  res.send(build.status + build.message)
})

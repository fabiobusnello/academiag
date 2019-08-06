const express = require("express")
const loger = require('morgan')
const actions = require('./actions/actions')
const app = express()
app.use(loger('dev'))

actions(app)

app.use((req, res) => {
  res.status(404).json({ error: 'page not found - STATUS:404' })
})

// auto verificação de porta
const listen = port => {
  app.listen(port, () => console.log(`LOGIN: http://localhost:${port}`)).on("error", err => {
    const { code } = err
    if(code === "EADDRINUSE") {
      listen(++port)
    } else {
      console.log(err)
    }
  })
}

// Listen in port 8081
listen(8081)
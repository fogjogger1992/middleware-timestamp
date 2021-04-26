// app.js
const express = require('express')
const app = express()
const port = 3000


app.use(function (req, res, next) {
  const startTime = Date.now()
  const time = new Date().toLocaleString().split(" ")[1]
  const monthDateYear = new Date().toLocaleString().split(",")[0]
  const month = monthDateYear.split("/")[0]
  const date = monthDateYear.split("/")[1]
  const year = monthDateYear.split("/")[2]

  res.on('finish', function () {
    const finishTime = Date.now()
    const duration = finishTime - startTime
    console.log(`${year}-${month}-${date} ${time} | ${req.method} from ${req.originalUrl} | total time: ${duration} ms`)
  })

  next()
})


app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
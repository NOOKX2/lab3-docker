const express = require('express')
const app = express()
const port = 8000

app.get('/hello-world', (req, res) => {
  res.send('ธัชวิชย์-ทวีชัยการ-6510405571') // Ratchaphon-Hinsui-6410450257
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
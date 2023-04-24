import express from 'express'

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World! updating only the app.js file and pushing to github')
})

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`)
})

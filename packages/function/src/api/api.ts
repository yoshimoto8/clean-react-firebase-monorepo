import * as express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('' + '1')
})

app.listen(9999, () => console.log('Listening on port 3000'))

export default app

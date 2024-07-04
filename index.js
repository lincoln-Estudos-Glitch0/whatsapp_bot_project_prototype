import  express from 'express'

import webhook from './controllers/webhookController.js'
import testRoute from './controllers/testController.js'

let app  = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(webhook)
app.use(testRoute)

app.listen(3000, () => console.log('listening at port 3000'))
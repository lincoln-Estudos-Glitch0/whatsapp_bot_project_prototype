import { Router } from "express"
import {strategyClass } from '../components/webhooksStrategy/webhooksStrategyClass.js'
import dotenv from 'dotenv'

dotenv.config()

let route = Router()


route.post('/webhook', (req, res) => {

    if(req.body){

        let wk = new strategyClass()

        wk.receiveMessage(req.body)
    }

    res.sendStatus(200).end()
})

route.get('/webhook', (req, res) => {

    let verify = req.query['hub.verify_token']
    let mode = req.query['hub.mode']
    let test = req.query['hub.challenge']

    if( mode == 'subscribe' && verify == process.env.WEBHOOK_VERIFY_TOKEN){

        res.status(200).send(test)
    }
    else {
        res.sendStatus(403)
    }
})



export default route
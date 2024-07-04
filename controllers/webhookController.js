import { Router } from "express"
import {strategyClass } from '../components/webhooksStrategy/webhooksStrategyClass.js'

let route = Router()


route.post('/webhook', (req, res) => {

    if(req.body){

        let wk = new strategyClass()

        wk.receiveMessage(req.body)
    }

    res.sendStatus(200).end()
})





export default route
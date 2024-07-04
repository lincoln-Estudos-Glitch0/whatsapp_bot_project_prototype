import { Router } from "express"


let route = Router()

route.get('/', (req, res) => {

    res.json({'msg':'testing glitch test window'})
})

export default route
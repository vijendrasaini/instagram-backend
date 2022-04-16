const express = require('express')
const User = require('../models/user.model')
const Follow = require('../models/follow.model')
const router = express.Router()

router.post('/', async ( req, res)=>{
    try {
            let ua = req.params.usernameA
            let ub = req.params.usernameB

            const status = await Follow.create({
                celeb : ua,
                user : ub
            })

        // if(user)
        //     return res
        //     .status(400)
        //     .send(
        //         {
        //         status : "failure",   
        //         reason : "User a or b not exits"
        //         }
        //     )
        return res
        .status(201)
        .send({  status: "success" })
    } catch (error) {
        return res
        .status(201)
        .send({
            message : error.message
        })
    }
})


module.exports = router

//  
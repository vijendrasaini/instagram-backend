const { Router } = require('express')
const UserProfile = require('../models/userprofile.model')
const router = Router() 


router.get('/api/get-user/:username', async (req, res)=>{
    try {
        const userProfile = await UserProfile.findOne({username : req.params.username}).lean().exec()
        if(!userProfile){
            return res
            .status(404)
            .send({})
        }
        return res
        .status(200)
        .send(userProfile)
    } catch (error) {
        return res
        .status(500)
        .send({
            message : error.message
        })
    }
})

module.exports = router
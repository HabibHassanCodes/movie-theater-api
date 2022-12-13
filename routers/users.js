const express = require("express");
const router = express.Router();
const { User, Show } = require("../models/index")

router.get("/", async (req, res) =>{
    res.send(await User.findAll() )
})
router.get("/:id", async (req,res) =>{
    res.send(await User.findByPk(req.params.id))
})
router.get("/userSeen/:id", async (req, res) =>{
    const userHasSeen = await Show.findAll({
        where:{
            userId: req.params.id
        }
    })
    res.send(userHasSeen)
})
router.put("/updated/:id/", async (req, res) =>{
    const showInfo = req.body;
    
    const showToUpdate = await Show.findAll({
        where:{
            userId: req.params.id
        }
    })
    
    await showToUpdate.update(showInfo)
    res.send(await Show.findAll())
})

module.exports = router;
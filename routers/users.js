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
    const user = await User.findByPk(req.params.id,{
        include: Show
    })
    res.send(user.shows)
})
router.put("/user/:id/show/:id2", async (req, res) =>{
  const foundUser = await User.findByPk(req.params.id);
  const show = await Show.findByPk(req.params.id2)
  await foundUser.addShow(show) 
  res.send(await Show.findAll())
})

module.exports = router;
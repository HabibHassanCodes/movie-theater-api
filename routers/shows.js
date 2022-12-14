const express = require("express");
const router = express.Router();
const { Show, User } = require("../models/index")

router.get("/", async (req, res) =>{
    res.send(await Show.findAll() )
})

router.get("/:id", async (req, res)=>{
   const show = await Show.findByPk(req.params.id)
    res.send(show)
})

router.get("/genre/:genre", async (req, res)=>{
    const show = await Show.findAll({
        where:{
         genre: req.params.genre
        }
    })
     res.send(show)
 })

router.put("/rating/:id/", async (req, res) =>{
    const show = await Show.findByPk(req.params.id);
    await show.update({rating:req.body})
    res.send(await Show.findAll())
})

router.put("/status/:id/", async (req, res) =>{
    const show = await Show.findByPk(req.params.id);
    await show.update({status:req.body})
    res.send(await Show.findAll())
})

router.delete("/:id", async(req,res)=>{
  const deletedShow=  Show.destroy({
        where:{
            id : req.params.id
        }
    })
    res.send(await Show.findAll())
})


module.exports = router;
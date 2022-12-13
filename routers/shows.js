const express = require("express");
const router = express.Router();
const { Show } = require("../models/index")

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

// router.put("/:id", async (req, res) =>{
//     const newShowInfo = req.body;
//     const ShowToUpdate = await Show.findByPk(req.params.id);
//     await ShowToUpdate.update(newShowInfo)
//     res.send(await Show.findAll())
// })



module.exports = router;
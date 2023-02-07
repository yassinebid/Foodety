const express = require("express");
const router = express.Router();
const Pizza = require('../models/pizzaModel')

router.get("/getallpizzas" , async (req , res)=>{

    try {
        const pizzas = await Pizza.find({})
        res.send(pizzas)
    }catch (error) {
        return res.status(400).json({ message: error});
    }
});

router.post("/newpizza", async (req, res) => {

    const { name, email, password } = req.body

    const newPizza = new User({ name, email, password })

    try {
        newUser.save()
        res.send('User Registered successfully')
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

module.exports = router;
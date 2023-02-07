const express = require("express");
const router = express.Router();
const User = require('../models/userModel')
const bcrypt = require('bcryptjs');
const saltRounds = 10;

router.post("/register", async (req, res) => {

    const { name, email, password } = req.body
    const hash = await bcrypt.hash(password, saltRounds);
    const newUser = new User({ name, email, password:hash })

    try {
        newUser.save()
        res.send('User Registered successfully')
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

router.post("/login", async (req, res) => {

    const { email , password } = req.body

    try {
        const user = await User.findOne({email})
        if (!user) {
            res.status(400).json({ message: 'login Failed' });
            return 
        }

        const isValid = await bcrypt.compare(password , user.password)
        if (!isValid){
            res.status(400).json({ message: "wrong password" });
            return 
        }

        res.send(user);
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

module.exports = router;
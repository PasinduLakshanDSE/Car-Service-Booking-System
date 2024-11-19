const express = require("express");
const router = express.Router();
const User = require("../model/user.jsx")

router.post("/SignUpForm", async(req,res)=>{

    const { name, contactNo, email, password } = req.body;

    const newUser = new User({ name, contactNo, email, password });

    try{
        const user = await newUser.save()
        res.status(201).send('User Registered Successfully');
    }catch(error){
        return res.status(400).json({ error});
    }

});


router.post("/SignInForm",async(req,res)=>{
    const{email, password} = req.body

    try{
        const user = await User.findOne({email: email , password: password})
        if(user){
            res.send(user) 
        }else{
            return res.status(400).json({message : ' Login  Faield'})

        }
        
    }catch(error){
        return res.status(400).json({error});
    }
});

module.exports = router
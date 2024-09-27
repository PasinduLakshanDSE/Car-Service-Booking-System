const  express = require ("express");
const router = express.Router();

const Technician = require("../model/technician.jsx")

router.get ("/gettechnician", async(req,res)=>{
    
    try {
        const technicians = await Technician.find({})
        res.send(technicians)
    } catch (error) {
        return res.status(400).json({message:error})
        
    }
});

module.exports = router;
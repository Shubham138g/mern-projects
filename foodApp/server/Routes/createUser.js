import express from 'express';
import UserModel from '../models/User.js';

const router =express.Router();





 const createuser=router.post('/createuser',async(req,res)=>{
    try {
        UserModel.create({
            name:req.body.name,
            location:req.body.location,
            email:req.body.email,
            password:req.body.password,
        })
        res.json({success:true});
    } catch (error) {
        console.log(error);
        res.json({success:false});
    }

});

export default createuser;
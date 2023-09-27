import express from 'express';
import UserModel from '../models/User.js';
import { body, validationResult } from 'express-validator';

const router = express.Router();





const createuser = router.post('/createuser',
    [
        body('email').isEmail(),
        body('password').isLength({ min: 4 }),
        body('name').isLength({ min: 4 }),
        body('location').isLength({ min: 4 }),
    ],
    async (req, res) => {
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        try {
            UserModel.create({
                name: req.body.name,
                location: req.body.location,
                email: req.body.email,
                password: req.body.password,
            })
            res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }

    });

export default createuser;
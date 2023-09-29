import express from 'express';
import UserModel from '../models/User.js';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();
const jwtSecret = "mynameisshubhamguptaandiamastudent";

router.post('/createuser',
    [
        body('email').isEmail(),
        body('password').isLength({ min: 4 }),
        body('name').isLength({ min: 4 }),
        body('location').isLength({ min: 4 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password, salt);

        try {
            UserModel.create({
                name: req.body.name,
                location: req.body.location,
                email: req.body.email,
                password: secPassword,
            })
            res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }

    });
router.post('/loginuser',
    [
        body('email').isEmail(),
        body('password').isLength({ min: 4 }),
        body('name').isLength({ min: 4 }),
        body('location').isLength({ min: 4 }),
    ], async (req, res) => {
        const email = req.body.email;
        try {
            const userData = await UserModel.findOne({ email });
            if (!userData) {
                return res.status(400).json({ errors: "try loging with correct credentials" });
            }

            const passwordCompare = await bcrypt.compare(req.body.password, userData.password)

            if (!passwordCompare) {
                return res.status(400).json({ errors: "try loging with correct credentials" });
            }
            const data = {
                user: {
                    id: userData.id
                }
            }
            const authtoken = jwt.sign(data, jwtSecret);
            return res.json({ success: true, authtoken: authtoken })

        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }

    });



export default router;
import * as dotenv from "dotenv";
import UserSchema from '../models/userModel.js';
import jwt from 'jsonwebtoken';

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}


// login user
export const loginUser = async(req, res) => {
    const {email, password} = req.body;
    try{
        const user = await UserSchema.login(email, password);
        const token = createToken(user._id);
        res.status(200).json({email, token});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

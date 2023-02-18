import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import validator from "validator";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// Static login method
userSchema.statics.login = async function(email, password){
    if (!email || !password){
        throw Error('All Fields must be filled.');
    }
    const user = await this.findOne({email});
    if (!user){
        throw Error('Incorrect Email');
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match){
        throw Error("Incorrect Password");
    }
    return user;

}

const UserSchema = mongoose.model('User', userSchema);

export default UserSchema;
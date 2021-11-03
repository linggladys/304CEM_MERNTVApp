const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    // this is where the users will stored at
    email:{
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
    },

    token:{
        type: String,
    }
    
})

userSchema.pre('save',async function(next){
    const user = this;
    // if users are editing their password
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,10);
    }
    
    next();
})

// this method is to give us to check an error or by cache
userSchema.statics.findByCredentials = async function (email, password){
    const user = await User.findOne({email});
    if(!user){
        // we are going to take the user and compare it with a password
        throw new Error ('Invalid credentials...');
    }
    const passwordSame = await bcrypt.compareSync(password, user.password);
    if (!passwordSame){
        throw new Error ('Invalid credentials...');
    }
    return user;
}

userSchema.methods.generateToken = async function(){
    //the inside JsonWebToken
    const user = this;
    // we take the user's id and assign it
    const token = await jwt.sign({_id: user._id}, "showsSecret", {expiresIn:"10hr"});
    user.token = token;
    await user.save();
    return token;
}

// we can change what we sent from the token
userSchema.methods.toJSON = function(){
    const user=this;
    const userObject = user.toObject();
    delete userObject.password;
    // don't send password
    delete userObject._id;
    return userObject;
}
const User = mongoose.model('User',userSchema);
module.exports = User;
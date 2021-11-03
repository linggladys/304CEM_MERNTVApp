// allow us to route to username route links
const router = require ('express').Router();
const User = require('./userModel');
const authUser= require('./authUser');
// require it from the user model (Schema)
router.post('/users', async(req,res)=>{
    console.log(req.body);
    try{
        const user = await User.create(req.body)
        // after create the username, we send it back to the user
        // we generate the token
        await user.generateToken();
        res.send(user)
    }catch(e){
        // if things don't happened as intended
        console.log(e);
        res.status(500).send()
    }
})

router.post('/login', async(req,res)=>{
    const {email,password} = req.body;
    console.log(req.body);
    try{
        const user = await User.findByCredentials(email,password);
        await user.generateToken();
        res.status(200).send(user);
    }catch(e){
        console.log(e);
        res.status(500).send();
    }
})

router.post('/autologin',authUser, async(req,res) => {
    // middleware to authenticate the user
    res.send(req.user);
})

router.post('/logout',authUser, async (req,res)=>{
    const user = req.user;
    user.token='';
    await user.save();
    res.status(200).send();
})
module.exports = router;
// use it in server.js
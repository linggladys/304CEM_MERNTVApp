// connected to our Mongoose db
const mongoose = require('mongoose');
const db_uri = `mongodb+srv://gladys:test@cluster0.ktajk.mongodb.net/ShowsDB?retryWrites=true&w=majority`;


mongoose.connect(process.env.MONGODB_URI || db_uri).then(()=>{
    console.log("Connection success!")
}).catch(error => console.log(error));


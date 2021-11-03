// where our Express server is running
const express = require ('express');
const userRoutes = require('./userRoutes');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5500;
const path = require ('path');

require ('./db');
app.use(cors());
// make sure to place app.use(cors()) first
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(userRoutes);

if(process.env.NODE_ENV === 'production'){
    // is our app on Heroku?
    app.use(express.static('show-client/build'));
    app.get ('*', (req,res)=>{
        res.sendFile(path.join(__dirname, 'show-client','build','index.html'));//relative path
    });

}

app.listen(PORT, ()=>{
    console.log("Server is listening to port ${PORT}");
})
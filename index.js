const express =require ('express');
const app = express();
const customerRoute =require("./routes/customerRoutes");
require( 'dotenv').config();
require("./model/dbConnect");

app.use(express.json());
app.use(express.urlencoded( { extended: true })); // middleware
app.use('/api/customer',customerRoute);
app.listen(process.env.port || 4000 , function (){
    console.log('Now listening for requests on:https://localhost:4000');
});


const express =require ('express');
const app = express();
const customerRoute =require("./routes/customerRoutes");
const courseRoutes =require( './routes/courseRoutes');
const studentRoutes =require( "./routes/studentRoutes");
const registrationRoutes=require( './routes/registrationRoutes')
require( 'dotenv').config();
require("./model/dbConnect");

app.use(express.json());
app.use(express.urlencoded( { extended: true })); // middleware



app.use('/api/customer',customerRoute);
app.use('/api/student',studentRoutes);
app.use('/api/course',courseRoutes);
app.use('/api/registration',registrationRoutes);
app.listen(process.env.port || 4000 , function (){
    console.log('Now listening for requests on:https://localhost:4000');
});
// app.use((err, req, res, next) => {
//     if (err.status === 401) {
//         res.status(401).send({
//             error: {
//                 status: 401,
//                 message: 'Unauthorized invalid username/password'
//             }
//         })
//     } else {
//         res.status(err.status || 500).send({
//             error: {
//                 status: err.status || 500,
//                 message: err.message || 'Internal Server Error'
//             }
//         });
//     }
// });

// not found middleware.
// app.use(async(req, res, next)=> {
//     next(createHttpError.NotFound())
// })


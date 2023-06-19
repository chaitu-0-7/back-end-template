import bodyParser from "body-parser";
import express  from "express";

import routes from './routes/index.js'

const app=express();

app.use(bodyParser.json());

routes.forEach(route =>{
    app[route.method](route.path,route.handler);
})
// app.get('/hello',(req,res) =>{
//     console.log('Server is hit baby')
//     console.log('Uh oh uh oh oh')
//     res.send("Hello World in 2023!")
// })
app.listen(8080, ()=>{
    console.log('Server is Listening')
});
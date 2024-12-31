const express=require("express")
const db=require("./db/connectdb")
const app=express();
const notFound= require("./middleware/not-found")
const port =3000;

// app.get('/hello',(req,res)=>{
//     res.send('Hello World');
// });

app.use(express.json());
app.use("/api/v1/tasks",require("./routes/tasks"));
app.use(notFound);
app.listen(port,console.log(`server is listening on port ${port}`));
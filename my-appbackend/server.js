import express from 'express'
import mongoose from 'mongoose'
import Cards from "./dbcards.js";
import cors from 'cors'

const app=express();
app.use(cors());


const port = process.env.PORT || 3001;
const conn="mongodb+srv://Abhinav:zhtGcPq26Sl6B6TE@cluster0.su31g.mongodb.net/?retryWrites=true&w=majority"
const connectionPrams ={
    useNewUrlParser:true,
    useUnifiedTopology:true
}
mongoose.connect(conn,connectionPrams).then(()=>{
    console.info("Succesfull");
})
.catch((e)=>{
    console.log("error")
}
);
// Middlewares
app.use(express.json()); 
// DB config

// API Endpoints
app.get("/", (req, res) =>res.status (200).send("HELLO CLEVER PROGRAMMERS!!!"));

app.post('/tinder/cards', (req, res) =>{
const dbCard=req.body;

Cards.create(dbCard,(err,data)=>{
    if (err) {
    res.status (500).send(err)
    } else {
    res.status (201).send(data)
    }
})
});
app.get('/tinder/cards', (req, res) =>{
    Cards.find((err,data)=>{
        if (err) {
        res.status (500).send(err)
        } else {
        res.status (200).send(data)
        }
    })
    });

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
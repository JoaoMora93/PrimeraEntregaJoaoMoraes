import express from 'express';


const app = express()

app.get('/saludo',(req,res)=>{
    res.send("¡Hola a todos, pero ahora desde express")
})

app.listen(8080,()=>console.log("¡Servbidor arriba en el pouerto 8080"))
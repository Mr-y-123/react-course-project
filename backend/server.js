import express from 'express'; 
import fs from 'fs'
const app=express()
app.use(express.static('./public'))
app.get('/api/places',async (req,res)=>{
    fs.readFile('./data/places.json', (err, data) => {
        if (err) throw err;
        const contentData=JSON.parse(data)
        res.send(contentData)
    })
})

app.get('/api/meals',async(req,res)=>{
    fs.readFile('./data/MealsData.json',(err,data)=>{
         if(err) throw err
         const contentData=JSON.parse(data)
         res.send(contentData)   
    })
})

app.listen('5000',console.log("server is started"))
const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('Hello, welcome to Jenkins World!');
})
app.get('/about', (req,res)=>{
    res.send('Hey, this is me, Sanket! Learning jenkins');
})
app.get('/:name', (req,res)=>{
    res.send(`Hello, ${req.params.name}! Do you know about Bhai Lang?`);
})

app.listen('50505', ()=>{
    console.log('server up on port http://localhost:50505');
})
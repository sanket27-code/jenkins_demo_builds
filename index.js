const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('Hello, welcome to Jenkins World!');
})

app.listen('50505', ()=>{
    console.log('server up on port http://localhost:50505');
})
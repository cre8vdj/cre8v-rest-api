const express = require('express');
const app = express(); app.use(express.json());
let tasks = [{id:1,title:'Demo',desc:'Task'}];
app.get('/api/tasks',(req,res)=>res.json(tasks));
app.post('/api/tasks',(req,res)=>{const t={id:tasks.length+1,...req.body};tasks.push(t);res.json(t);});
app.listen(3000,()=>console.log('API on http://localhost:3000'));

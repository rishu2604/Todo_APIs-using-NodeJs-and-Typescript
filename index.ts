// const express = require('express');
// import express = require('express');
import express from 'express';
import todosRoutes from './routes/todos';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(todosRoutes); // middleware

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})
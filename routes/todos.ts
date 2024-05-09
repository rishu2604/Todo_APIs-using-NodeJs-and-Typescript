// import express from 'express';
// const router = express.Router();

import { Request, Router } from "express";
import { ToDo } from '../models/todo';

const router = Router();
let todos: ToDo[] = [];

type RequestBody = { text: String };
type RequestParams = { todoId: String };

router.get('/', (req, res, next)=>{
    res.status(200).json({ todos: todos });
})

router.post('/todo', (req: Request, res, next)=>{
    const body = req.body;
    const newTodo: ToDo = {
        id: new Date().toISOString(),
        text: body.text
    }

    todos.push(newTodo);
    return res.status(201).json({message: 'Added a todo item', todo: newTodo, todos: todos});
})

router.put('/todo/:todoId', (req, res, next)=>{
    const params = req.params as RequestParams;
    const tid = params.todoId;
    const body = req.body as RequestBody
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid);
    if(todoIndex>=0){
        todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
        return res.status(200).json({message: 'Todo list updated', todos: todos});
    }
    res.status(404).json({message: "Couldn't find the id"});
})

router.delete('/todo/:todoId', (req, res, next)=>{
    const params = req.params as RequestParams;
    todos = todos.filter((todoItem) => todoItem.id !== params.todoId);
    return res.status(200).json({message: 'Deleted an item', todos: todos});
})

export default router;
import { useState } from 'react'
import { useContext,createContext } from 'react'


export const TodoContext= createContext({
    todos:[],
    addTodo:(todo)=>{},
    update:(id,todo)=>{},
    deleteTodo:(id)=>{},
    complete:(id)=>{}
    });

export const useTodo=()=>{
    return useContext(TodoContext);
}

export const TodoProvider=TodoContext.Provider;
/* eslint-disable no-unused-vars */

import React from 'react'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todosList: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todosList.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.todosList = state.todosList.filter((todo) => todo._id !== action.payload)
        },
        updateTodo: (state, action) => {
            const index = state.todosList.findIndex((todo) => todo._id === action.payload._id)
            state.todosList[index] = action.payload
        },
        completeTodo: (state, action) => {
            const index = state.todosList.findIndex((todo) => todo._id === action.payload._id)
            state.todosList[index].completed = action.payload.completed
        },
        removeAll: (state, action) => {
            state.todosList = []
        }





    }

})

export const { addTodo,deleteTodo,updateTodo,completeTodo,removeAll } = todoSlice.actions

export const selectTodoList = state => state.todos.todosList

export default todoSlice.reducer

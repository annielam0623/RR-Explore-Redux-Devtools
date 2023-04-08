import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeOne, clearTodo } from './features/todoSlice'

function Todo() {
    const items = useSelector((state) => state.todos.items)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const renderItems = 

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
    }

    return (
        <div>
            <form onSubmit={(e) => submitForm(e)}>
                <input type="text" onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {
                  items.map((item, i) => {
                    return <Fragment key={i}>
                    <li>{item}</li>
                    <botton onClick={() => dispatch(deleteTodo(i))}>Delete</botton>
                    </Fragment> 
                })
            }
            </ul>
            <button onClick={() => dispatch(clearTodo())}>Clear</button>
        </div>
    )
}

export default Todo

import React from 'react'
import {TodosItems} from "./TodosItems";

export default function Todos(props) {

    let myStyle = {
        minHeight: '70vh',
        margin: '20px  auto',
    }

    return (
        <div className="container" style = {myStyle}>
            <h3 className="text-center my-3">Todos List</h3>
            {props.todos.length === 0 ? "No todos to display" :
            props.todos.map((todo) => {
                return (
                <>
                <TodosItems todo={todo} key={todo.sno} onDelete = {props.onDelete}/> <hr />
                </>
                )
            })}
            
        </div>
    )
}

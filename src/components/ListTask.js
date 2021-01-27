import React from 'react';
import Todo from './Task';
import { useSelector } from "react-redux";

function ToDoList() {
    const task = useSelector(state => state)
    return (
        <div>
            {
            task.str=='ALL' ?
            task.t.map(el => <Todo key={el.id} el={el} />):
            task.str=='DONE' ?
            task.t.filter(el=>el.isDone).map(el => <Todo key={el.id} el={el} />):
            task.t.filter(el=>!el.isDone).map(el => <Todo key={el.id} el={el} />)

        }
        </div>
    )
}

export default ToDoList
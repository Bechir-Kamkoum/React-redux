import React, { useState,  } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from "../redux/todoAction";

const ToDoForm= ()=>{
const[description, setDescription]= useState('')
const dispatch = useDispatch();


  return(
    <div>
      <input type='text' value={description} onChange={(e) =>setDescription(e.target.value)} />
      <button onClick={()=>{dispatch(addTask
      ({
        id: Math.random(),
        description: description.trim(),
        isDone: false,
        edit: false,
      })
        )
        setDescription('')}
        }>Add</button>
    </div>
  )
}

    
export default ToDoForm
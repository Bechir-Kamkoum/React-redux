import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editTask, completeTask, deleteTask, cancel } from "../redux/todoAction";


const Todo = ({el}) => {
    const dispatch = useDispatch();
    const [editText, setEditText] = useState(el.description);

    
  
    return(
      el.edit? 
      <>
      {
      <div>
      <input type='text' value={editText} onChange={(e) =>setEditText(e.target.value)} />
      <button onClick={()=>dispatch(cancel(el.id))}>cancel</button>
      <button onClick={()=>dispatch(
              editTask(
              {
                ...el,
                description: editText
            })
          )}>save</button>
    </div>
      }
      </>
      :
      <>
      {
  <div>
          <p style={el.isDone? {textDecoration:'line-through'} :{textDecoration:'none'} }>{el.description}</p>
          <button onClick={()=>dispatch(deleteTask(el.id))}>Delete</button>
          <button onClick={()=>dispatch(completeTask(
              el.id
          )
          )}>{el.isDone? "Undo" :"Done"}</button>
          <button onClick={()=>dispatch(
              editTask(
              {
                ...el,
                description: editText
            })
          )}>Edit</button>
        </div>
      }
      </>
    )
    }
     
    export default Todo;
  
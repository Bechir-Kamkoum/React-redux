import React from 'react';
import { useDispatch } from 'react-redux';
import { filterDone } from "../redux/todoAction";

function FilterDone() {
    const dispatch = useDispatch();

    return(
        <div>
            <label>
            <input type="radio" name='foo'  onClick={()=>dispatch(filterDone('DONE'))} />
            Done
            </label>
            <label>
            <input type="radio" name='foo' onClick={()=>dispatch(filterDone('NOTDONE'))} />
            Not done
            </label>
            <label>
            <input type="radio" name='foo' onClick={()=>dispatch(filterDone('ALL'))} />
            Show All
            </label>
        </div>

    )
}

export default FilterDone
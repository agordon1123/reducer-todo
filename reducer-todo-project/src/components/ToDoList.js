import React from 'react';
import ToDo from './ToDo';

const ToDoList = props => {
    console.log('props in ToDoList: ', props)
    return (
        <div>
            <p>Hello from ToDoList.js</p>
            {props.state.item.map(e => (
                <ToDo
                    key={e.id}
                    e={e}
                    toggleItem={props.toggleItem}
                />
            ))}
            <button onClick={props.clearItems}>Clear</button>
        </div>
    )
}

export default ToDoList;

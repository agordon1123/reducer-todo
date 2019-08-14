import React from 'react';

const ToDo = props => {
    console.log('props in ToDo: ', props)
    return (
        <div onClick={() => props.toggleItem(props.e.id)}>
            <p className={`${props.e.completed ? ' completed' : ''}`}>{props.e.item}</p>
        </div>
    )
}

export default ToDo;

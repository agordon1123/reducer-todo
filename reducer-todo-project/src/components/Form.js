import React, { useState } from 'react';

const Form = (props) => {
    const [item, setItem] = useState({
        item: ''
    })

    console.log('props in form: ', props)

    const handleChanges = e => {
        setItem({
            [e.target.name]: e.target.value
        });
        console.log(item);
    }

    const submitItem = e => {
        e.preventDefault();
        props.addItem(item)
        console.log(item)
    }

    return (
        <form className='form' onSubmit={submitItem}>
            <input 
                type='text'
                name='item'
                value={item.item}
                placeholder='Add to list...'
                onChange={handleChanges}
            />
            <button type='submit' className='button'>Add</button>
        </form>
    )
}

export default Form;

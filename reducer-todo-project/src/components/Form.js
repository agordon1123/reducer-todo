import React, { useState } from 'react';

const Form = () => {
    const [item, setItem] = useState({
        item: ''
    })

    const handleChanges = e => {
        setItem({
            [e.target.name]: e.target.value
        });
        console.log(item);
    }

    const submitItem = e => {
        e.preventDefault();
        // addItem(item.item)
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

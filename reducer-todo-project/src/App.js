import React, { useReducer } from 'react';
import './App.css';
import Form from './components/Form';
import { formReducer, initialState } from './reducers/formReducer';
import ToDoList from './components/ToDoList';

const App = () => {
  const [state, dispatch] = useReducer(formReducer, initialState)
  console.log('state in app: ', state)
  console.log('initialState in app: ', initialState)

  const addItem = ite => {
    const newItem = {
      item: ite.item,
      completed: false,
      id: Date.now()    
    }
    console.log('newItem in app: ', newItem)
    dispatch({ type: 'ADD_TODO', payload: newItem })
  }

  const toggleItem = id => {
    console.log('id: ', id)
    dispatch({ type: 'TOGGLE_ITEM', payload: id })
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Form 
        addItem={addItem}
        state={state}
      />

      <ToDoList 
        state={state}
        toggleItem={toggleItem}
      />
    </div>
  );
}

export default App;

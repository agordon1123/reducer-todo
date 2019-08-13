import React, { useReducer } from 'react';
import './App.css';
import Form from './components/Form';
import { formReducer, initialState } from './reducers/formReducer';

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

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Form 
        addItem={addItem}
        state={state}
      />
      <p>{state.item.map((e) => {
        console.log(e)
        return <p>{e.item}</p>;
      })}</p>
    </div>
  );
}

export default App;

import React, { useReducer } from 'react';
import './App.css';
import Form from './components/Form';
import { formReducer, initialState } from './reducers/formReducer';

const App = () => {
  const [state, dispatch] = useReducer(formReducer, initialState)
  console.log(state)
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Form />
      <p>{state.item}</p>
    </div>
  );
}

export default App;

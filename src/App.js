
import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index';

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispath = useDispatch();
  return (
   <>
    <div className="container">
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>

      <div className="quantity">
        <a className="quantity_minus" title="Decrement" onClick={() => dispath(decNumber())}><span>-</span></a>
        <input name="quantity" type="text" className="quantity__input" value={myState}/>
        <a className="quantity_plus" title="Increment" onClick={() => dispath(incNumber()) }><span>+</span></a>
      </div>
    </div>
   </>
  )
}

export default App


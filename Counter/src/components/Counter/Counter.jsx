import { useState } from 'react'
import "./Counter.css"

const Counter = ({number,initialState}) => {
  const [counter, setCounter] = useState(initialState)
//const Counter = (props) => {
  //  console.log(props);
  //  const [counter, setCounter] = useState(props.initialState)
//const number = props.number
  const increment = () => {
    setCounter(counter + number)
  };
  const decrement = () => {
    setCounter(counter - number)
  };

  return (
      <div className='counter'>
        <button onClick={increment}>+</button>
        <span>{counter}</span>
        <button onClick={decrement}>-</button>
      </div>
  )
}

export default Counter;
import React from 'react'

const UseState = () => {
    const[cout,setcout] = useState(0)
    const [CSSMathValue,setvalue] =usestate("");
    const handleDecrement = ()=>{
        setcout(cout -1);
    };
    const handleReset = () =>{
        setcount(0);
    };
    const handelIncrement = () =>{
        set(count +1);
    };
  return (
    <div>
        <h1>{value}</h1>
        <input type="text" onChange={(e)=>setvalue (e.target)}></input>
        <h1>{count}</h1>
        <button onclick={handelDecrement}>Decrement</button>
        <button onclick={handleReset}>Reset</button>
        <button onclick={handleIncrement}>Increment</button>
        </div>
  )
}

export default UseState
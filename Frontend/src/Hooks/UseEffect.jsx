import React from 'react'

const UseEffect = () => {
    const [count,setcount]=useState(0);
    const [value,setvalue]=useState("");

    useEffect( ()=> { 
        console.log("UseEffect Mounted")
    },[])
  return (
    <>
    <div>UseEffect</div>
    <h1>[count]</h1>
    <button onClick={()=>setcount(count+1)}>Inc</button>
    </>
  )
}

export default UseEffect
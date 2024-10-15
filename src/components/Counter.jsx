import React, { useRef, useState } from 'react'

const Counter = () => {
    const [stateCount, setStateCount] = useState(0);
    const [user, setUser]=useState({name:"ana",edad:"", email:""});
    const [inputInfo, setInputInfo]= useState("input");
    const input1 = useRef(null);
    const imaBatman = useRef(null); 
    
    useEffect(()=> {
        console.log(input1.current.value);
        
    },[]);
    
    return (
    <>  
        <div>Counter: {stateCount} </div>
        <div style={{color:'#111'}}>Nombre: {inputInfo} </div>
        <button onClick={()=>setUser({name:"sara", edad:"12", email:"sara@example.com"})}>user</button>
        <button onClick={()=> setStateCount(stateCount+1)}>+1</button>
        <button onClick={()=> setStateCount(0)}>0</button>
        <button onClick={()=> setStateCount(stateCount-1)}>-1</button>
        
        <form>
            <input ref={input1} onChange={(e)=>{
                setInputInfo(inputInfo+e.target.value);
                localStorage.setItem('nueva info',inputInfo);
            }

            } />
        </form>

    </>
  )
}

export default Counter
import React, {useState,useEffect} from 'react'

const Counter = () => {
    const[counter,setCounter]=useState(0)

    const arttir = (newCount)=>{
       
     
        setCounter(newCount)
    }
    useEffect(()=>{
    document.title=counter 
    },[counter])   
    
  return (
    <div>
        <p>{counter}</p>
        <button className="btn btn-primary" onClick={()=>arttir(counter+1)}>Arttır</button>
    </div>
  )
}

export default Counter
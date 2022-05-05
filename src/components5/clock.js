import React, {useState,useEffect} from 'react'
import moment from 'moment'

const Clock = (props) => {
    const [dateTime,setDateTime] = useState(moment)

    useEffect(()=>{
       const timer = setInterval(()=>{
           setDateTime(moment);
       })

       return ()=>{
           clearInterval(timer)
       }
    },[])

    const hour = dateTime.format("HH")
    const minute = dateTime.format("mm")
    const second = dateTime.format("ss")
    const date = dateTime.format("LL")
    const day = dateTime.format("dddd")

    let message = "";
    if(hour>=6 && hour<12)
    message="Morning"
    else if(hour>=12 && hour<15)
    message="Noon"
    else if(hour>=15 && hour<18)
    message="Afternoon"
    else if(hour>=18 && hour<22)
    message="Evening"
    else
    message="Night"

    const stil = {backgroundColor:props.bgColor,color:props.color}

  return (
    <div className="container" style={stil}>
        <div className="time">{hour}{second%2==0 ? ":" : " "}{minute}</div>
        <div>
            <div className="date">{date}</div>
            <div className="day">{day} {message}</div>
        </div>

    </div>
  )
}

export default Clock
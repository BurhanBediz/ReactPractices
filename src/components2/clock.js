import React from 'react'
import '../assets/css/clock.css'
import moment from 'moment'

const Clock = (props) => {

const dateTime = moment();
const time = dateTime.format('hh:mm');
const date = dateTime.format('DD-MM-YYYY');
const day = dateTime.format('dddd');
let message = "";
if(time>=6 && time<12)
message="Morning";
else if(time>=12 && time<15)
message="Noon";
else if(time>=15 && time<18)
message="Afternoon";
else if(time>=18 && time<20)
message="Evening";
else message="Night";

const stil ={color:props.color,backgroundColor:props.bgColor};
  return (
    <div className="container" style={{...stil,}}>
        <div className="time">{time}</div>
        <div>
            <div className="date">{date}</div>
            <div>{day} {message}</div>
        </div>
    </div>
  )
}

export default Clock
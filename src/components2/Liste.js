import React from 'react'
import students from '../assets/data/Students.json'

const Liste = () => {
  return (
    <div>
        <ul>
           {
           students.filter((student)=>student.yas<15).map((student,index)=>{
               return(
                   <li key={index}>{student.isim}</li>
               )
           })
            }
        </ul>
    </div>
  )
        }

export default Liste
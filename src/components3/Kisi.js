import React from 'react'

const Kisi = (props) => {
    const {ad,img,yas,kurs} =props;
  return (
    <div className= "kisi-container">
        <h3>{ad}</h3>
        <img src={img} alt="" width="120" height="130"/>
        <h4>Yaş : {yas}</h4>
        <h4>Kurs : {kurs}</h4>
    </div>
  )
}

export default Kisi
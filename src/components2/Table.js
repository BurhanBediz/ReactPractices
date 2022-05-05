import React from 'react'
import countries from '../assets/data/countries.json'

const Table = () => {

   const stil = {textAlign:"center",backgroundColor:"lightblue"};
   const stil2 = {textAlign:"center",backgroundColor:"lightgray"};
    
  return (
    
        <div>
        <select defaultValue="">
            <option disabled value="">Bir Ülke seçin</option>
            {
                countries.map((country)=>{
                    return (
                    <option key={country.code}>{country.name}</option>
                    )
                })
            }
        </select>

        {<table>
            <thead>
                <tr style={{backgroundColor:"black",color:"white"}}>
                    <th>Sıra No</th>
                    <th>Ülke Adı</th>
                    <th>Kodu</th>
                </tr>
            </thead>
            <tbody>
                {countries.filter((a)=>a.name.startsWith('A')).map((country,index)=>{
                    return (
                        <tr key={index} style={index%2==1 ? stil2 : stil}>
                        <td>{index+1}</td>
                        <td>{country.name}</td>
                        <td>{country.code}</td>
                    </tr>
                    )
                })
                }
            </tbody>
        </table>}
        </div>
   
  )
}

export default Table
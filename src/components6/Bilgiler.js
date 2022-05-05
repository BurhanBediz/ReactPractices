import React, {useState} from 'react'
import {Card, Button} from 'react-bootstrap'
import data from './data'


const Bilgiler = () => {
const [index,setIndex]=useState(0);
//const [person,setPerson]=useState(data[index]);

const sonraki = (nxt) => { 
   if(nxt>data.length-1)
   nxt=0;
   setIndex(nxt)
 }
 const onceki = (prv) => { 
    if(prv<0)
    prv=data.length-1;
    setIndex(prv)
  }

  const rastgele = ()=>{
      let rnd= Math.floor(Math.random()*data.length);
      setIndex(rnd);
  }

 const {resim,isim,tarih,metin,id} = data[index];

  return (
     
    <div style={{position: 'relative',padding:20}}>
    <Card style={{ width: '18rem', height: '28rem' }}>
  <Card.Img variant="top" src={resim} height="200"/>
  <Card.Body>
    <Card.Title>{isim}</Card.Title>
    <Card.Title>{tarih}</Card.Title>
    <Card.Title>{id}</Card.Title>
    <Card.Text >
        {metin}
    </Card.Text>
    <div   style={{
          bottom: "10px",
          position: "absolute",
        }}>
    <Button variant="primary"  onClick={()=>onceki(index-1)}>Previous</Button>
<Button variant="success" style={{marginRight:10,marginLeft:10}} onClick={()=>rastgele()}>Rastgele</Button>
<Button variant="warning" onClick={()=>sonraki(index+1)}>Next</Button>
</div>
  </Card.Body>
</Card>

</div>
  )
}

export default Bilgiler
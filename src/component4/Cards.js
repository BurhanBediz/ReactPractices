import React from 'react'
import {Card,Button} from "react-bootstrap"

const Cards = ({ad,img,yas,kurs}) => {
  return (
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} width="100" height="250"/>
  <Card.Body>
    <Card.Title text-center>{ad}</Card.Title>
    <Card.Text className="text-center">
     {kurs}
    </Card.Text>
    <h3 className="text-center">{yas}</h3>
  </Card.Body>
</Card>
  )
}

export default Cards
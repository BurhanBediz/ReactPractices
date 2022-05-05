import React, { useState } from "react";
import { Card,Button } from "react-bootstrap";
const Tour = ({ id, image, info, name, price,removeTour}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <Card className="my-3">
      <Card.Img src={image} alt=""/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title>{price}$</Card.Title>
        <Card.Text>{readMore ? info : `${info.substring(0, 150)}...`}
        <button style={{border:"none",background:"white",color:"blue",textDecoration:"underline"}} onClick={() => setReadMore(!readMore)}>
          {readMore ? "show less" : "  read more"}
        </button>
        </Card.Text>
      <button onClick={()=>removeTour(id)}>Not interested</button>
      </Card.Body>
    </Card>
  );
};
export default Tour;
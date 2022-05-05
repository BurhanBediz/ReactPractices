import React, {useState,useEffect} from "react";
import Tour from "./Tour";
import axios from "axios";

const url = "https://course-api.com/react-tours-project";
const Tours = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        dataTours();
      }, []);
      const dataTours = () => {
        axios(url).then((resp) => {
          setTours(resp.data);
        });
      };
      const removeTour = ((id)=>{
          const arr = tours.filter(tour=>tour.id!=id)
          setTours(arr);
      })


       if(tours.length===0){
          return (
              <div className="m-3">
                  <h2>No Tours</h2>
                  <button onClick={()=>dataTours()}>Refresh</button>
              </div>
          );
      } 
  return (

    <div>
        <h2 className="text-center">Our Tours</h2>
        <div>
        <div style={{width:'75%',marginRight:"auto",marginLeft:"auto"}}>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour}/>;
        })}
      </div>
        </div>
    </div>
  );
};
export default Tours;
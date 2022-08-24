import React from "react";
import Card from "./Cards";
import Sdata from './Sdata'

// function ncard(val)
// {
//   return(<Card
//     imgsrc={val.imgscr}
//     title={val.title}
//     sname={val.sname}
//     link= {val.links}
//   />);
// }
const App = () => (
  <>
  <h1 className="heading_style">List of top Amozan prime Series</h1>
    
    {Sdata.map((val)=>{
      return(<Card
            key = {val.id}
            imgsrc={val.imgscr}
            title={val.title}
            sname={val.sname}
            link= {val.links}
            />
      );
    }


    )}
  </>
 
)


export default App;

import React from "react";
import Card from "./cards";
export default function Found(){
 const [a,seta]=React.useState([1,2,3,4])
   ;
  console.log(a)
 return (
   <React.Fragment>
     <div className='bgimage2'></div>
     <section className='section'>
       <h2 className='section-title'>FOUND ITEMS</h2>
       <div className='cocktails-center'>
         {a.map(() => {
           return <Card />;
         })}
       </div>
     </section>
   </React.Fragment>
 );
}
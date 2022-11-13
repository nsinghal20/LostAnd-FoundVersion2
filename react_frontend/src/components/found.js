import React from "react";
import Card from "./cards";
export default function Found(){
let a=10;

 return (
  <React.Fragment>
   {a.map((item)=>{
    return <Card/>
   })}
  </React.Fragment>
 )
}
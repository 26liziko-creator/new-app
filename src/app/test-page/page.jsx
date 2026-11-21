"use client"

import { useState } from "react";
import styles from "./page.module.css";


export default function Testpage() {
  // let count = 70;
  const[count,setCount] = useState(0) 

  const incrementByOne = ()=> {
    // count++;
    setCount((prevCont) => {
      console.log(prevCont);
      
      return prevCont +1
    });
    
    
  }
  const decrementByOne = ()=> {
      setCount((prevCont) => {
        return prevCont -1
      });
      
  }
  return (
    <>
      <h2>{count}</h2>
      <button onClick={ incrementByOne}>+</button>
      {"        "}
      <button onClick={decrementByOne}>-</button>
    </>
  );
}

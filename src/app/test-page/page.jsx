
"use client"

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Testpage() {
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    const savedCount = localStorage.getItem("count");

    if (savedCount !== null) {
      setCount(JSON.parse(savedCount));
    }

    setIsLoaded(true);
  }, []);


  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("count", JSON.stringify(count));
    }
  }, [count, isLoaded]);

  const incrementByOne = () => {
    setCount((prevCont) => {
      console.log(prevCont);
      return prevCont + 1;
    });
  };

  const decrementByOne = () => {
    setCount((prevCont) => {
      if (prevCont === 0) {
        return prevCont;
      } else {
        return prevCont - 1;
      }
    });
  };

  return (
    <div className={styles.counterCont}>
      <h2 className={styles.count}>{count}</h2>

      <div className={styles.buttons}>
        <button onClick={incrementByOne}>+</button>
        <button onClick={decrementByOne}>-</button>
      </div>
    </div>
  );
}

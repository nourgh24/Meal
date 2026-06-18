import React, { useState } from 'react'
import Comp1 from './Comp1';
const Parent = () => {
    const [count , setCount]= useState(0);
    function add(){ setCount(count +1);}
    function del(){setCount(count -1);}
    function reset(){setCount(0);}
  return (
    <div>
        <Comp1
        count1={count}
        setCount1={setCount}
         add1={add}
         del1={del}
         reset1={reset}
         />
    </div>
  )
}
export default Parent

import React from 'react'
import Comp2 from './Comp2'
const Comp1 = ({add1 ,del1,reset1 ,setCount1, count1}) => {
  return (
    <div>
      <Comp2 
      count2={count1}
      setCount2={setCount1}
      add2={add1}
      del2={del1}
      reset2={reset1}
      />
    </div>
  )
}
export default Comp1

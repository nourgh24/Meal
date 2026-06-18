import React from 'react'
const Comp2 = ({add2, del2, reset2, setCount2, count2}) => {
  return (
    <div className="meal-card">
      <img 
        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80" 
        alt="Burger" 
        className="meal-img" 
      />
      <div className="meal-info">
        <h3 className="meal-title"> Double cheese Mix Pizza Meal</h3>
        <p className="meal-price">Price: 15$</p>
      </div>
      <div className="counter-section">
        <span className="count-number">{count2}</span>
        <span className="quantity-label">Quantity</span>
      </div>
      <div className="buttons-group">
        <button type="button" onClick={add2} className="btn-add">+</button>
        <button type="button" onClick={del2} className="btn-del">-</button>
        <button type="button" onClick={reset2} className="btn-reset">Reset</button>
      </div>
    </div>
  )
}
export default Comp2
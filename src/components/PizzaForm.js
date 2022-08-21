import React, { useState } from "react";

function PizzaForm( { handleSubmit, currentPizza, edit, setSizes } ) {

  const [veg, setVeg] = useState(true)
  const [toppings, setToppings] = useState('')
  // const [sizes, setSizes] = useState('')
  const {id, topping, size, vegetarian} = currentPizza
  // const newPizza = {topping: toppings, vegetarian: veg, size: sizes, id: id}

  return (
    <form onSubmit={(e) => {handleSubmit(e)}}>
      <div className="form-row">
        <div className="col-5">
          <input 
            onChange={(e) => setToppings(e.target.value)}
            className="form-control"
            type="text"
            name="topping"
            placeholder={edit ? topping : "Pizza Topping"}
            // value={topping}
          />
        </div>
        <div className="col">
          <select 
            onChange={(e) => setSizes(e.target.value)}
            className="form-control"
            name="size"
            // value={size}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange={() => setVeg(true)}
              // checked={vegetarian}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              onChange={() => setVeg(false)}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              // checked={!vegetarian}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;

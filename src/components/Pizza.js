import React from "react";

function Pizza( { pizza, editPizza } ) {
  const {topping, size, vegetarian} = pizza
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? '🌱' : '🥩'}</td>
      <td>
        <button onClick={() => editPizza(pizza)} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;

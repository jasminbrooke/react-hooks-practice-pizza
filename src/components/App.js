import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [currentPizza, setCurrentPizza] = useState('')
  const [edit, setEdit] = useState(false)
  const [sizes, setSizes] = useState('')



  useEffect(() => {
    fetch(`http://localhost:3001/pizzas`)
    .then(res => res.json())
    .then(data => setPizzas(data))
  }, [])

  const editPizza = (pizza) => {
    debugger
    setSizes(pizza.size)
    // console.log(pizza)
    // setCurrentPizza(pizza)
    // setEdit(true)
  }

  const handleSubmit = (e, pizza) => {
    e.preventDefault()
    //patch to pizza
    fetch(`http://localhost:3001/pizzas/${pizza.id}`, {
    method: "PATCH",
    headers: {"Content-type" : "application/json"}, 
    body: JSON.stringify(pizza)

    })
  }

  return (
    <>
      <Header />
      <PizzaForm currentPizza={currentPizza} edit={edit} handleSubmit={handleSubmit} setSizes={setSizes}/>
      <PizzaList pizzas={pizzas} editPizza={editPizza} />
    </>
  );
}

export default App;

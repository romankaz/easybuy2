import React, { useState } from 'react'
import { ReactSortable } from 'react-sortablejs'


export const FoodItem = () => {

  const [state, setState] = useState([
    { id: 1, name: "shrek" },
    { id: 2, name: "fiona" },
  ])




return (
  <ReactSortable list={state} setList={setState}>
      {state.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </ReactSortable>
)
}
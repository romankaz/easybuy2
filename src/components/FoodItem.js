import React, { useState, forwardRef } from 'react'
import { ReactSortable } from 'react-sortablejs'

const CustomComponent = forwardRef((props, ref) => (
  <ul ref={ref} className="list-group">{props.children}</ul>
))

export const FoodItem = () => {

  const [state, setState] = useState([
    { id: 1, name: "List 1" },
    { id: 2, name: "List 2" },
  ])




return (
  <ReactSortable tag={CustomComponent} list={state} setList={setState}>

      {state.map((item) => (
        <li className="list-group-item" key={item.id}>{item.name}</li>
      ))}

    </ReactSortable>

)
}
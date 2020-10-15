import React, { Fragment, forwardRef, useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ReactSortable } from 'react-sortablejs'
import { CreateItem } from '../components/CreateItem'
import { FoodListDetailsContext } from '../context/foodlistdetails/foodListDetailsContext'
import { FoodListItem } from '../components/FoodListItem'

const CustomComponent = forwardRef((props, ref) => (
  <ul ref={ref} className="list-group" style={{marginTop: '2rem'}}>{props.children}</ul>
))

export const FoodListDetails = ({match}) => {

    const urlName = match.params.name
    // console.log(urlName)

    const {loading} = useContext(FoodListDetailsContext)
    const foodItems = useContext(FoodListDetailsContext)
    //const foodItems = useContext(FoodListDetailsContext)

    //const [items, setItems] = useState([])

    // setItems(foodItems)

    // console.log(items)
    // console.log("Food Items",foodItems)
    // useEffect(() => {
    //   console.log("Food Items Changed!",foodItems)
    //   setItems(foodItems)
    // })

    // console.log("Items", items)


   // const [style, setStyle] = useState('list-group-item list-group-item-danger')

  // const markItem = () => {
  //   setStyle(style === 'list-group-item list-group-item-danger' ? 'list-group-item list-group-item-success' : 'list-group-item list-group-item-danger')
  // }

  // const setState = () => {
  //   return null
  // }

  // function setState() {
  //   return ''
  // }

  // const [state, setState] = useState([
  //   { id: 1, name: "List 1" },
  //   { id: 2, name: "List 2" },
  // ])

  // const [state, setState] = useState({foodItems})

  // console.log('Food Items', foodItems)
  //console.log('State Items', state)
  // console.log('Loading Food Items', loading)

  console.log('Render foodItems', foodItems)

    return (
        <Fragment>
            <Link to="/" className="btn btn-link" style={{color:'#17a2b8', padding: '0rem'}}>
                To the main
            </Link>
            <h2 style={{marginTop: '1rem', marginBottom: '1rem', color: 'rgb(23, 162, 184)'}}>{urlName}</h2>
            <CreateItem />
            {loading
              ? <p className="text-center">Loading...</p>
              :
                // <ul className="list-group" style={{marginTop: '2rem'}}>
                <ReactSortable tag={CustomComponent} list={foodItems.foodItems} setList={foodItems.set}>
                   {/* TODO: Fix the key issue!!! */}
                  {foodItems.foodItems.map((item, index) => (
                     //<li className='list-group-item' key={item.id}>{item.itemName}</li>
                      <FoodListItem foodItem={item} key={item.id} index={index}/>
                    ))
                  }
                </ReactSortable>
                //</ul>

            }
             {/* <ReactSortable tag={CustomComponent} list={foodItems} setList={setState}>

              {foodItems.map((item,index) => (
                <li className='list-group-item' key={item.itemName}>{item.itemName}</li>
              ))}

              </ReactSortable> */}

        </Fragment>
    )
}
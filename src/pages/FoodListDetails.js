import React, { Fragment, forwardRef, useContext, useState } from 'react'
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

    const {loading, foodItems} = useContext(FoodListDetailsContext)

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

    return (
        <Fragment>
            <Link to="/" className="btn btn-link" style={{color:'#17a2b8', padding: '0rem'}}>
                To the main
            </Link>
            <h2 style={{marginTop: '1rem', marginBottom: '1rem', color: 'rgb(23, 162, 184)'}}>{urlName}</h2>
            <CreateItem />
            {loading
              ? <p className="text-center">Loading...</p>
              : <ul className="list-group" style={{marginTop: '2rem'}}>
                {/* <ReactSortable tag={CustomComponent} list={foodItems} setList={setState}> */}
                  {foodItems.map((foodItem, index) => (
                     //<li className='list-group-item' key={foodItem.id}>{foodItem.itemName}</li>
                      <FoodListItem foodItem={foodItem} key={foodItem.id} index={index}/>
                    ))
                  }
                {/* </ReactSortable> */}
                </ul>

            }
             {/* <ReactSortable tag={CustomComponent} list={foodItems} setList={setState}>

              {foodItems.map((item,index) => (
                <li className='list-group-item' key={item.itemName}>{item.itemName}</li>
              ))}

              </ReactSortable> */}

        </Fragment>
    )
}
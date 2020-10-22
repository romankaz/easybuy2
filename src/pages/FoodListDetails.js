import React, { Fragment, forwardRef, useContext} from 'react'
import { ReactSortable } from 'react-sortablejs'
import { CreateItem } from '../components/CreateItem'
import { FoodListDetailsContext } from '../context/foodlistdetails/foodListDetailsContext'
import { FoodListItem } from '../components/FoodListItem'

const CustomComponent = forwardRef((props, ref) => (
  <ul ref={ref} className="list-group mx-4" style={{marginTop: '2rem'}}>{props.children}</ul>
))

export const FoodListDetails = ({match}) => {

    const urlName = match.params.name

    const {loading} = useContext(FoodListDetailsContext)
    const foodItems = useContext(FoodListDetailsContext)

    return (
        <Fragment>
            <h2 style={{marginTop: '1rem', marginBottom: '1rem', color: 'rgb(23, 162, 184)'}}>{urlName}</h2>
            <CreateItem />

            {loading
              ? <p className="text-center">Loading...</p>
              :
              <ReactSortable tag={CustomComponent} list={foodItems.foodItems} setList={foodItems.set}>
                  {foodItems.foodItems.map((item, index) => (
                      <FoodListItem foodItem={item} key={index} index={index}/>
                    ))
                  }
              </ReactSortable>
            }
        </Fragment>
    )
}
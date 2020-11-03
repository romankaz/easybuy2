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

            <CreateItem foodListName={urlName} />

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
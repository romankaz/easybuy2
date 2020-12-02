import React, { Fragment, forwardRef, useContext, useEffect} from 'react'
import { ReactSortable } from 'react-sortablejs'
import { CreateItem } from '../components/CreateItem'
import { FoodListDetailsContext } from '../context/foodlistdetails/foodListDetailsContext'
import { FoodListItem } from '../components/FoodListItem'
import { AlertContext } from '../context/alert/alertContext'

const CustomComponent = forwardRef((props, ref) => (
  <ul ref={ref} className="list-group list-group-flush mx-4" style={{marginTop: '2rem'}}>{props.children}</ul>
))

export const FoodListDetails = ({match}) => {

    const urlName = match.params.name

    const {loading} = useContext(FoodListDetailsContext)
    const foodItems = useContext(FoodListDetailsContext)

    const alert = useContext(AlertContext)

    useEffect(() => {
      foodItems.initName(urlName)
      foodItems.fetchItems(urlName)
      if(foodItems.isError) {
        alert.show('Error by reading the food items ...try again later')
      }
  }, [foodItems.disabled])

    return (
        <Fragment>

            <CreateItem foodListName={urlName} />

            {loading
              ? <p className="text-center">Loading...</p>
              :
              <ReactSortable disabled={foodItems.disabled} tag={CustomComponent} list={foodItems.foodItems} setList={foodItems.set}>
                  {foodItems.foodItems.map((item, index) => (
                      <FoodListItem foodItem={item} key={index} index={index}/>
                    ))
                  }
              </ReactSortable>
            }
        </Fragment>
    )
}
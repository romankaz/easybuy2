import React, { Fragment, useContext, useEffect } from 'react'
import { Create } from '../components/Create'
import { FoodList } from '../components/FoodList'
import { AlertContext } from '../context/alert/alertContext'
import { FoodListContext } from '../context/foodlists/foodListContext'


export const Home = () => {

const {loading} = useContext(FoodListContext)
const foodLists = useContext(FoodListContext)
const alert = useContext(AlertContext)

useEffect(() => {
    foodLists.fetchLists()
    if(foodLists.isError) {

        alert.show('Error by reading the food lists ...try again later', 'danger')
    }
}, [])

return (
        <Fragment>
            <h2 style={{marginTop: '1rem', marginBottom: '1rem', color: 'rgb(23, 162, 184)'}}>My Food Lists</h2>
            <Create />
                {loading
                ? <p className="text-center">Loading...</p>
                : <ul className="nav flex-column">
                    {foodLists.foodLists.map((foodList, index) =>
                        <FoodList foodList={foodList} key={index} index={index}/>
                    )}
                  </ul>
                }
        </Fragment>

    )
}
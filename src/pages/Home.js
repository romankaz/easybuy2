import React, { useContext } from 'react'
import { Create } from '../components/Create'
import { FoodList } from '../components/FoodList'
import { FoodListContext } from '../context/foodlists/foodListContext'


export const Home = () => {

const {loading, foodLists} = useContext(FoodListContext)

return (
        <div>
            <Create />
                {loading
                ? <p className="text-center">Loading...</p>
                : <ul className="nav flex-column">
                    {foodLists.map((foodList, index) =>
                        <FoodList foodList={foodList} key={index} index={index}/>
                    )}
                  </ul>
                }
        </div>

    )
}
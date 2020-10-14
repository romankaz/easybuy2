import React, { useContext } from 'react'
import { Create } from '../components/Create'
import { FoodList } from '../components/FoodList'
import { FoodListContext } from '../context/foodlists/foodListContext'


export const Home = () => {

const {loading, foodLists} = useContext(FoodListContext)
console.log('Food Lists', foodLists)
//console.log('Loading Food Lists', loading)

return (
        <div>
            <Create />
                {loading
                ? <p className="text-center">Loading...</p>
                : <div className="list-group">
                    {foodLists.map((foodList, index) =>
                        <FoodList foodList={foodList} key={index} index={index}/>
                    )}
                  </div>
                }
        </div>

    )
}
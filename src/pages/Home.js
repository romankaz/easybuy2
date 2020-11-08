import React, { Fragment, useContext } from 'react'
import { Create } from '../components/Create'
import { FoodList } from '../components/FoodList'
import { FoodListContext } from '../context/foodlists/foodListContext'


export const Home = () => {

const {loading, foodLists} = useContext(FoodListContext)

//useEffect

return (
        <Fragment>
            <h2 style={{marginTop: '1rem', marginBottom: '1rem', color: 'rgb(23, 162, 184)'}}>My Food Lists</h2>
            <Create />
                {loading
                ? <p className="text-center">Loading...</p>
                : <ul className="nav flex-column">
                    {foodLists.map((foodList, index) =>
                        <FoodList foodList={foodList} key={index} index={index}/>
                    )}
                  </ul>
                }
        </Fragment>

    )
}
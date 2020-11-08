import React from 'react';
import { Navbar } from './components/Navbar';
import {BrowserRouter} from 'react-router-dom'
import { AlertState } from './context/alert/alertState';
import { FoodListState } from './context/foodlists/foodListState';
import { FoodListDetailsState } from './context/foodlistdetails/foodListDetailsState';
import { AuthorizationState } from './context/authorization/authorizationState';
import { Wrapper } from './components/Wrapper';

function App() {

  return (

    <AuthorizationState>
      <FoodListDetailsState>
        <FoodListState>
          <AlertState>
          <BrowserRouter>
            <Navbar />
            <Wrapper />
          </BrowserRouter>
          </AlertState>
        </FoodListState>
      </FoodListDetailsState>
    </AuthorizationState>
  );
}

export default App;

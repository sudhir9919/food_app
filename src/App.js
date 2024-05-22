import React from 'react'
import './App.css'
import './components/style.css'
import Meal from './components/Meal'
import RecipeInfo from './components/RecipeInfo'
import { Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={ <Meal />}/>
      <Route path='/:MealId' element={<RecipeInfo/>}/>
      </Routes>
     
      </div>
  )
}

export default App
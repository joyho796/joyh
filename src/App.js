import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Eats from './pages/Eats';
import RecipeDetails from './pages/Recipes/RecipeDetails'
import RecipeList from './pages/Recipes/RecipeList';
import Musings from './pages/Musings';

function App() {
  return (
    <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="Recipes" element={<Recipes />}>
              <Route index element={<RecipeList />} />
              <Route path=":recipe" element={<RecipeDetails />} />
            </Route>
            <Route path="Eats" element={<Eats/>}/>
            <Route path="Musings" element={<Musings/>}/>
          </Routes>
    </Router>
  );
}

export default App;

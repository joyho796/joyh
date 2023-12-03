import React, { useState } from 'react';
import styles from './Recipes.module.css';
import recipes from '../../data/recipes'
import { useNavigate } from 'react-router-dom';
import Heading from '../../components/Layout/Heading';
import Placeholder from '../../components/Placeholder';

function RecipeCard({recipe, onClick}) {
    return (
        <div className={styles.recipe} onClick={onClick}>
            <img src={require(`../../assets/images/foods/${recipe.imgName}`)} />
            <span>{recipe.name.toUpperCase()}</span>
        </div>
    )
}

function SearchBar({setRecipeList}) {
    const handleSearch = (event) => {
        const searchQuery = event.target.value
        setRecipeList(recipes.filter((recipe) => {
            return recipe.id.split('-').some((word) => word.startsWith(searchQuery) || recipe.id.replace(/-/g, ' ').startsWith(searchQuery))
        }))
    }
    return (
        <div className={styles.searchbar}>
            <input type="text" onChange={handleSearch} placeholder="Search Recipes ..."/>
        </div>
    )
}

function RecipeList({recipe}) {
    const navigate = useNavigate()
    document.title = 'Recipe List'
    const [recipeList, setRecipeList] = useState(recipes)
    return (
        <>
            <div className={styles.headingBarContainer}>
                <Heading text={'RECIPE LIST'}/>
                <SearchBar setRecipeList={setRecipeList}/>
            </div>
            <div className={styles.recipes}>
            {recipeList.map((recipe)=> (
                <RecipeCard recipe={recipe} key={recipe.id} onClick={()=> {navigate(`${recipe.id}`)}}/>
            ))}
            {recipeList.length === 0 && <Placeholder text={'no results'}/>}
            </div>
        </>
    )
}

export default RecipeList;
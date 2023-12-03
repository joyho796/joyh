import React from 'react';
import styles from './Recipes.module.css';
import { useParams } from 'react-router-dom';
import recipes from '../../data/recipes'

function Image({source, caption}) {
  return (
    <div className={styles.recipeImage}>
        <img src={source} />
        <span>{caption}</span>
    </div>
  )
}

function Title({recipe}) {
  return (
      <div className={styles.recipeTitle}>
          <div className={styles.recipeSubtitle}>{recipe.cookTime}</div>
          <span>{recipe.name.toUpperCase()}</span>
          <div className={styles.desktopOnly}>
            <RecipeCard recipe={recipe}/>
          </div>
      </div>
  )
}

function RecipeCard({recipe}) {
  return (
    <div className={styles.recipeCard}>
      <span>Ingredients</span>
      <div className={styles.ingredientsContainer}>
        {recipe.ingredients.map((list) => {
          return (
            <div className={styles.ingredientsList}>
              {list.map((item)=> <span>{item}</span>)}
            </div>
          )
        })}
      </div>
      <span >Instructions</span>
      <div className={styles.instructionsContainer}>
        {recipe.instructions.map((instruction) => <span>{instruction}</span>)}
      </div>
    </div>
  )
}

function RecipeDetails() {
  const params = useParams();
  const recipe = recipes.find((recipe) => recipe.id === params.recipe)
  document.title = `Recipes | ${recipe.name}`
  return (
    <div className={styles.detailsHeader}>
      <Title recipe={recipe}/>
      <Image source={require(`../../assets/images/foods/${recipe.imgName}`)} caption={recipe.desc} />
      <div className={styles.mobileOnly}>
        <RecipeCard recipe={recipe}/>
      </div>
    </div>
  )
}

export default RecipeDetails;
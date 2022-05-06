import React, { useState } from "react";

function RecipeCreate({addRecipe}) {
  const recipeInit = {
    name:'',
    cuisine:'',
    photo:'',
    ingredients:'',
    preparation:''
  }
  const [recipe,recipeEdit]=useState(recipeInit)

  const editRecipe = ({target}) => {
    recipeEdit({...recipe,[target.name]:target.value})
  }

  

  const submit = (event) => {
    event.preventDefault()
    addRecipe(recipe)
    recipeEdit(recipeInit)
  }

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={submit}>
      <table>
        <tbody>
          <tr>
            <td> <input placeholder="name" id="name" type="text" name="name" required={true} onChange={editRecipe} value={recipe.name}/> </td>
            <td> <input placeholder="cuisine" id="cuisine" type="text" name="cuisine" required={true} onChange={editRecipe} value={recipe.cuisine}/> </td>
            <td><input placeholder="photo url" id="photo" name="photo" type="url" required={true} onChange={editRecipe} value={recipe.photo}/></td>
            <td><textarea name="ingredients"  placeholder="ingredients" id="ingredients" type="text" name="ingredients" required={true} onChange={editRecipe} value={recipe.ingredients}/> </td>
            <td><textarea name="preparation" placeholder="preparation" id="preparation" type="text" name="preparation" required={true} onChange={editRecipe} value={recipe.preparation}/> </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;

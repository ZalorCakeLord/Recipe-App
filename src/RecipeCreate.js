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

  
  const nameChange = (event) =>{
    event.persist();
    recipeEdit((value)=>{return{...value,name:event.target.value}})
  }

  const cuisineChange = (event) =>{
    event.persist();
    recipeEdit((value)=>{return{...value,cuisine:event.target.value}})
  }

  const urlChange = (event) =>{
    event.persist();
    console.log('url edited')
    recipeEdit((value)=>{return{...value,photo:event.target.value}})
  }

  const ingredientsChange = (event) =>{
    event.persist();
    recipeEdit((value)=>{return{...value,ingredients:event.target.value}})
  }

  const preparationChange = (event) =>{
    event.persist();
    recipeEdit((value)=>{return{...value,preparation:event.target.value}})
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
            <td> <input placeholder="name" id="name" type="text" name="name" required={true} onChange={nameChange} value={recipe.name}/> </td>
            <td> <input placeholder="cuisine" id="cuisine" type="text" name="cuisine" required={true} onChange={cuisineChange} value={recipe.cuisine}/> </td>
            <td><input placeholder="photo url" id="photo" name="photo" type="url" required={true} onChange={urlChange} value={recipe.photo}/></td>
            <td><textarea name="ingredients"  placeholder="ingredients" id="ingredients" type="text" name="ingredients" required={true} onChange={ingredientsChange} value={recipe.ingredients}/> </td>
            <td><textarea name="preparation" placeholder="preparation" id="preparation" type="text" name="preparation" required={true} onChange={preparationChange} value={recipe.preparation}/> </td>
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

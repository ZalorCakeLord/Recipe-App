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

  
  const nameChange = (e) =>{
    e.persist();
    recipeEdit((v)=>{return{...v,name:e.target.value}})
  }

  const cuisineChange = (e) =>{
    e.persist();
    recipeEdit((v)=>{return{...v,cuisine:e.target.value}})
  }

  const urlChange = (e) =>{
    e.persist();
    recipeEdit((v)=>{return{...v,photo:e.target.value}})
  }

  const ingredientsChange = (e) =>{
    e.persist();
    recipeEdit((v)=>{return{...v,ingredients:e.target.value}})
  }

  const preparationChange = (e) =>{
    e.persist();
    recipeEdit((v)=>{return{...v,preparation:e.target.value}})
  }
  

  const submit = (e) => {
    e.preventDefault()
    console.log(`Added ${recipe.name}`)
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

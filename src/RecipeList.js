import React from "react";

function RecipeList({list,setRecipes}) {
  console.log(list)
  let recipes = []
  const deleteRecipe = (e) => {
    e.persist()
    let tag = e.target.parentNode.parentNode.getAttribute('postId')
    let name = list[+tag].name
    list.splice((+tag),1)
    setRecipes((v)=>[...list])
    //alert(`You deleted ${name}`)
  }
  
  for(let i=0;i<list.length;i++){
    let {name,cuisine,photo,ingredients,preparation} = list[i]
    recipes.push(
      <tr key={i} postid={i}>
        <td>{name}</td>
        <td>{cuisine}</td>
        <td><img alt={name} src={photo}/></td>
        <td className="content_td"><p>{(ingredients)}</p></td>
        <td className="content_td"><p>{(preparation)}</p></td>
        <td><button name='delete' onClick={deleteRecipe}>Delete</button></td>
      </tr>
    )
  }
  
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th style={{width:"10%"}}>Name</th>
            <th style={{width:"10%"}}>Cuisine</th>
            <th style={{width:"10%"}}>Photo</th>
            <th style={{width:"30%"}}>Ingredients</th>
            <th style={{width:"30%"}}>Preparation</th>
            <th style={{width:"10%"}}>Actions</th>
          </tr>
        </thead>
        <tbody>
        {recipes}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;

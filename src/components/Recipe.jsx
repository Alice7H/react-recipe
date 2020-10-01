import React, {useState} from 'react'
import Details from './Details';
import './Recipe.css'

export default function Recipe({recipe}) {
    // console.log(recipe.totalNutrients); // PROCNT FAT CHOCDF
    const [show, setShow] = useState(false)
    
    const showDetails = () => {
        setShow(!show)
    }

    return (
        <div className="card">
            <h1>{recipe.label}</h1>
            <img className="card-image" src={recipe.image} alt={`${recipe.label} recipe`} />
            <div className="card-container">
                <p>Calories: {recipe.calories.toFixed(2)} Kcal</p>
                <h3>Ingredients:</h3>
                <dl>  
                    {recipe.ingredients.map( (result, index)=> (
                        <dt key={index}>{result.text}</dt>
                    ))}
                </dl>
                <p>Click in the button below to know more about the recipe:</p>
                <button className="card-button"> 
                    <a className="card-link" href={recipe.url}>
                        {recipe.source}
                    </a>
                </button>
                
                <div className="card-details">
                    <button className="card-button" onClick={showDetails}>
                        { show === false ? 'Show Details' : 'Hide Details' }
                    </button>                  
                        { show === true ? <Details nutrients={recipe.totalNutrients} /> : null }
                </div>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import Details from '../Details';
import './Recipe.css'
import { toTwoDecimaNumbers } from '../../utils/Formatter';
import { toGeneratedId } from '../../utils/GeneratedNumber';

export default function Recipe({ recipe }) {
    const [show, setShow] = useState(false)
    const showDetails = () => setShow(!show)

    return (
        <article className="card">
            <h1>{recipe.label}</h1>
            <figure>
                <img className="card-image" src={recipe.image} alt={`${recipe.label} recipe`} />
                <figcaption>{`${recipe.label} photo`}</figcaption>
            </figure>
            <div className="card-container">
                <p>Calories: {toTwoDecimaNumbers(recipe.calories)} Kcal</p>
                <h3>Ingredients:</h3>
                <dl>
                    {recipe.ingredients.map((result, index) =>
                        <dt key={toGeneratedId(index)}>{result.text}</dt>
                    )}
                </dl>
            </div>
            <footer>
                <p>Click in the button below to know more about the recipe:</p>
                <button className="card-button">
                    <a className="card-link" href={recipe.url} target="_blank" rel="noopener noreferrer">
                        {recipe.source}
                    </a>
                </button>

                <div className="card-details">
                    <button className="card-button" onClick={showDetails}>
                        {show === false ? 'Show Details' : 'Hide Details'}
                    </button>
                    {show === true ? <Details nutrients={recipe.totalNutrients} /> : null}
                </div>
            </footer>
        </article>
    )
}

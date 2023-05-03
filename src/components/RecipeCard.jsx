/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const RecipeCard = ({ recipe }) => {
    const { recipe_name, ingredients, cooking_method, ratings } = recipe;
    return (
        <div>
            <div className="card bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p>
                        <span className='font-semibold'>Ingredients:</span>
                        <ol className='list-disc list-inside'>
                            {ingredients.map(i => <li>{i}</li>)}
                        </ol>
                    </p>
                    <p>
                        <span className='font-semibold'>Cooking Method:</span>
                        <br />
                        {cooking_method}
                    </p>
                    <p>
                        <span className='font-semibold'>Ratings:</span>                     {ratings}
                    </p>
                    <div className="card-actions justify-end">
                        <button className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
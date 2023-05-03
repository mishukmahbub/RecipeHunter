// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';

const Recipes = () => {
    const { chef_picture_url, chef_name, years_of_experience, num_recipes, num_likes, bio, recipes } = useLoaderData();

    return (
        <div>
            {/* banner */}
            <div className='my-10'>
                <div className="card lg:card-side bg-base-100 shadow-xl w-auto">
                    <figure className='ps-8'><img src={chef_picture_url} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">{chef_name}</h2>
                        <p><span className='font-semibold'>Experience:</span> {years_of_experience} years</p>
                        <p><span className='font-semibold'>Number of recipes:</span> {num_recipes}</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                            </svg> {num_likes}
                        </p>
                        <p><span className='font-semibold'>Short Bio:</span> {bio}</p>
                    </div>
                </div>
            </div>
            {/* recipes card */}
            <div className='my-10'>
                <h2 className='font-extrabold text-4xl text-center my-10'>Recipes</h2>
                <div className='grid grid-cols-2 gap-8'>
                    {
                        recipes.map(recipe => <RecipeCard
                            key={recipe.id}
                            recipe={recipe}
                        ></RecipeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Recipes;
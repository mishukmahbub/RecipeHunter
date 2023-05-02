// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../components/ChefCard';
import FAQ from '../components/FAQ';

const Home = () => {
    const chefDetail = useLoaderData();
    return (
        <>
            {/* Banner */}
            <div className="flex flex-row justify-center items-center bg-primary my-10 py-6 px-4 sm:px-6 lg:px-8">
                <div className="flex-1">
                    <h2 className="text-2xl font-bold leading-7 sm:text-3xl sm:truncate">
                        Discover Delicious Food Recipes
                    </h2>
                    <p className="mt-2 text-base leading-6 sm:text-lg sm:leading-7">
                        Find inspiration for your next meal with our collection of mouth-watering
                        recipes.
                    </p>
                </div>
                <div className="flex-1">
                    <img src='https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="food-recipes" className="h-96 w-full object-cover" />
                </div>
            </div>
            {/* chef detail */}
            <h2 className='font-extrabold text-4xl text-center my-10'>Featured Chefs</h2>
            <div className='grid grid-cols-2 gap-8'>
                {
                    chefDetail.map(chef => <ChefCard
                        key={chef.id}
                        chef={chef}
                    ></ChefCard>)
                }
            </div>
            <h2 className='font-extrabold text-4xl text-center my-10'>FAQ</h2>
            <div className='my-10'>
                <FAQ></FAQ>
            </div>

        </>
    );
};

export default Home;
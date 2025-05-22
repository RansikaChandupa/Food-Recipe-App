import React from 'react'
import foodRecipe from '../assets/foodRecipe.png'

export default function Home() {
  return (
    <section className='home'>
        <div className="left">
            <h1>Food Recipe</h1>
            <h5>Welcome to Flavorful Bites, your ultimate destination for discovering mouthwatering recipes that cater to every craving! Whether you're a seasoned chef, a home cook, or just starting your culinary journey, our collection of diverse and easy-to-follow recipes will inspire your next delicious creation. From comforting classics to exotic dishes, we've curated recipes to suit every taste, occasion, and dietary preference. Explore, cook, and savor the joy of homemade meals – because the best moments are made in the kitchen. Let’s cook something amazing today!</h5>
            <button>Share your recipe</button>
        </div>
        <div className="right">
            <img src={foodRecipe} width="320px" height="300px" alt="" />
        </div>
        <div className="bg"></div>
    </section>
  )
}

import React from 'react'
import foodRecipe from '../assets/foodRecipe.png'


export default function Home() {
  return (
    <>
    <section className='home'>
        <div className="left">
            <h1>Food Recipe</h1>
            <h5>Welcome to Flavorful Bites, your ultimate destination for discovering mouthwatering recipes that cater to every craving! Whether you're a seasoned chef, a home cook, or just starting your culinary journey, our collection of diverse and easy-to-follow recipes will inspire your next delicious creation. From comforting classics to exotic dishes, we've curated recipes to suit every taste, occasion, and dietary preference. Explore, cook, and savor the joy of homemade meals – because the best moments are made in the kitchen. Let’s cook something amazing today!</h5>
            <button>Share your recipe</button>
        </div>
        <div className="right">
            <img src={foodRecipe} width="320px" height="300px" alt="" />
        </div>
       
    </section>
     <div className="bg">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,160L24,176C48,192,96,224,144,245.3C192,267,240,277,288,282.7C336,288,384,288,432,256C480,224,528,160,576,138.7C624,117,672,139,720,160C768,181,816,203,864,213.3C912,224,960,224,1008,229.3C1056,235,1104,245,1152,224C1200,203,1248,149,1296,144C1344,139,1392,181,1416,202.7L1440,224L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
      </div>
    </>
  )
}

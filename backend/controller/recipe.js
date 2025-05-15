const recipes = require("../models/recipe")

const getRecipes = (req, res)=>{
    // console.log("suceess or fail")
    res.json({message:"Hello"})
}

const getRecipe = (req, res)=>{
    // console.log("suceess or fail")
    res.json({message:"Hello"})
}

const addRecipe = async(req, res)=>{
    const {title, ingredients, instructions, time} = req.body

    if(!title || !ingredients || !instructions){
        return res.status(400).json({message: "Required fields cannot be empty"})
    }
    try{
        const newRecipe = await recipes.create({
        title, ingredients, instructions, time,
    })
    return res.status(201).json(newRecipe)
    }
    catch(error){
        console.error("Error adding recipe:", error.message);
        return res.status(500).json({ message: "An error occurred while adding the recipe" })
    }
}

const editRecipe = (req, res)=>{
    // console.log("suceess or fail")
    res.json({message:"Hello"})
}

const deleteRecipe = (req, res)=>{
    // console.log("suceess or fail")
    res.json({message:"Hello"})
}

module.exports = {getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe}
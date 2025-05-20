const recipes = require("../models/recipe")

const getRecipes = async(req, res)=>{
    const recipeItems = await recipes.find()
    return res.status(200).json(recipeItems)
    
}

const getRecipe = async(req, res)=>{
    const recipeItem = await recipes.findById(req.params.id)
    return res.status(200).json(recipeItem)
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

const editRecipe = async(req, res)=>{
    const {title, ingredients, instructions, time} = req.body
    let recipe = await recipes.findById(req.params.id)
    try{
        if(recipe){
            await recipes.findByIdAndUpdate(req.params.id, req.body, { new: true })
            return res.status(201).json(title, ingredients, instructions, time)
        }
    }
    catch(error){
        console.error("Error updating recipe:", error.message)
        return res.status(404).json({ message: "An error occurred while updating the recipe" })
    }
}

const deleteRecipe = (req, res)=>{
    // console.log("suceess or fail")
    res.json({message:"Hello"})
}

module.exports = {getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe}
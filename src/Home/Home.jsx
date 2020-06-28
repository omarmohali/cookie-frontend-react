import React from "react";
import RecipeCard from "./../RecipeCard/RecipeCard";
import getRecipes from "./../network-layer/get-recipes-request";
import "./Home.css";

function Home() {
    
    var [recipes, setRecipes] = React.useState(null);

    async function fetchRecipes() {
        try {
            var recipes = await getRecipes();
            setRecipes(recipes);
        } catch (err) {
            console.log(err);
        }
    }

    if (!recipes) {
        fetchRecipes()
    }

    function RecipeCards() {
        if (recipes) {
            return <div>
                <RecipeCard recipe={recipes[0]}/>
                <RecipeCard recipe={recipes[0]}/>
                <RecipeCard recipe={recipes[0]}/>
                <RecipeCard recipe={recipes[0]}/>
                <RecipeCard recipe={recipes[0]}/>
                <RecipeCard recipe={recipes[0]}/>
            </div>;
        } else {
            return <div />;
        }
    }

    return <div className="container">
        <RecipeCards />
    </div>;
}

export default Home;
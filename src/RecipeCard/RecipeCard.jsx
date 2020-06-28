import React from "react";
import { fullUrl } from "./../network-layer/network-configuration";
import "./RecipeCard.css";

function RecipeCard(props) {
    var recipe = props.recipe;
    var fullImageUrl = fullUrl(recipe.imagesUrls[0]);
    var fullProfileImageUrl = fullUrl(recipe.user.profilePictureUrl);

    function Tags(props) {
        const tags = props.tags;
        var tagsList = [];
        for (var i = 0; i < tags.length; i++) {
        tagsList.push(<span className="tag-container"><p className="tag">{tags[i]}</p></span>)
        }
        return <div className="tags">
            {tagsList}
            </div>
    }


    return  <div className="card">
        <img className="recipe-image" src={fullImageUrl} alt={recipe.title}/>
        <div className="image-gradient"></div>
        <h2 className="likes-count">{recipe.likesCount} <i className="fa fa-heart" aria-hidden="true"></i></h2>
        <h3 className="recipe-title">{recipe.title} </h3>
        <Tags tags={recipe.tags}/>
        <img className="user-profile-image" src={fullProfileImageUrl} alt={recipe.user.firstName}/>
        <h4 className="user-name">{recipe.user.firstName + " " + recipe.user.lastName}</h4>
    </div>;
}

export default RecipeCard;
import React from "react";
import RecipeCard from "./../RecipeCard/RecipeCard";
import getRecipes from "./../network-layer/get-recipes-request";
import "./Home.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

            return <Container>
                <Row>
                    <Col style={{marginBottom: "30px"}} xs={12} sm={6} md={6} lg={4} xl={3}><RecipeCard recipe={recipes[0]}/></Col>
                    <Col style={{marginBottom: "30px"}} xs={12} sm={6} md={6} lg={4} xl={3}><RecipeCard recipe={recipes[0]}/></Col>
                    <Col style={{marginBottom: "30px"}} xs={12} sm={6} md={6} lg={4} xl={3}><RecipeCard recipe={recipes[0]}/></Col>
                    <Col style={{marginBottom: "30px"}} xs={12} sm={6} md={6} lg={4} xl={3}><RecipeCard recipe={recipes[0]}/></Col>
                    <Col style={{marginBottom: "30px"}} xs={12} sm={6} md={6} lg={4} xl={3}><RecipeCard recipe={recipes[0]}/></Col>
                    <Col style={{marginBottom: "30px"}} xs={12} sm={6} md={6} lg={4} xl={3}><RecipeCard recipe={recipes[0]}/></Col>
                    <Col style={{marginBottom: "30px"}} xs={12} sm={6} md={6} lg={4} xl={3}><RecipeCard recipe={recipes[0]}/></Col>
                    <Col style={{marginBottom: "30px"}} xs={12} sm={6} md={6} lg={4} xl={3}><RecipeCard recipe={recipes[0]}/></Col>
                    <Col style={{marginBottom: "30px"}} xs={12} sm={6} md={6} lg={4} xl={3}><RecipeCard recipe={recipes[0]}/></Col>
                    <Col style={{marginBottom: "30px"}} xs={12} sm={6} md={6} lg={4} xl={3}><RecipeCard recipe={recipes[0]}/></Col>
                    <Col style={{marginBottom: "30px"}} xs={12} sm={6} md={6} lg={4} xl={3}><RecipeCard recipe={recipes[0]}/></Col>
                </Row>
            </Container>
        } else {
            return <div />;
        }
    }

    return <div>
        <RecipeCards />
    </div>;
}

export default Home;
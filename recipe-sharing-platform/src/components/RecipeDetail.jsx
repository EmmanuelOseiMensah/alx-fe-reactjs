import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams(); // Grabs the "id" from the URL string
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Logic: Fetch the data and find the specific recipe that matches the ID
    const fetchRecipe = async () => {
      try {
        const response = await fetch('../data.json');
        const data = await response.json();
        
        // Use .find() to locate the recipe where the ID matches
        // We use parseInt because 'id' from useParams is a string
        const foundRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [id]); // Re-run if the ID in the URL changes

  // Loading state: prevents the app from crashing while 'recipe' is null
  if (!recipe) {
    return <div>Loading recipe details...</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.summary}</p>
      
      <div>
        <h3>Recipe Ingredients & Instructions</h3>
        <p>This data would eventually come from your JSON file.</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
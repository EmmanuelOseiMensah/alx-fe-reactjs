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
    <div className="max-w-3xl mx-auto p-4 shadow-2xl">
      <h1 className="text-4xl">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.summary}</p>
    
      
      <div className="mt-6 shadow-lg p-4 rounded-lg bg-gray-100">
        <h3>Recipe Ingredients & Instructions</h3>
        <h4 className="font-bold">Ingredients:</h4>
        <ul className="list-disc pl-5">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        
        <h4 className="font-bold mt-4">Instructions:</h4>
        <ol className="list-decimal pl-5">
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
    
      </div>
    </div>
  );
}

export default RecipeDetail;
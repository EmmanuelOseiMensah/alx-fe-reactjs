import { useState } from 'react';


function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing

    // STEP 2: Validation Logic
    if (!title || !ingredients || !instructions) {
      setErrors('All fields are required!');
      return;
    }

    const ingredientList = ingredients.split('\n').filter(i => i.trim() !== '');
    if (ingredientList.length < 2) {
      setErrors('Please include at least two ingredients (one per line).');
      return;
    }

    // Success Logic (for now, we just log the data)
    console.log({ title, ingredients: ingredientList, instructions });
    
    // Clear form
    setTitle('');
    setIngredients('');
    setInstructions('');
    setErrors('');
    alert('Recipe submitted successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-lg my-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Add a New Recipe</h2>
      
      {errors && <p className="text-red-500 mb-4 font-medium">{errors}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Field */}
        <div>
          <label className="block text-gray-700 font-bold mb-2">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="e.g. Grandma's Famous Lasagna"
          />
        </div>

        {/* Ingredients Field (Textarea) */}
        <div>
          <label className="block text-gray-700 font-bold mb-2">Ingredients (one per line)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="2 cups flour&#10;3 eggs"
          />
        </div>

        {/* Preparation Steps Field (Textarea) */}
        <div>
          <label className="block text-gray-700 font-bold mb-2">Preparation Steps</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows="6"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="1. Mix ingredients...&#10;2. Bake for 30 mins..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
        >
          Post Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
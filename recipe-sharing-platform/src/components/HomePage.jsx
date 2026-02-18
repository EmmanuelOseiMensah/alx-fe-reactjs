import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const loadData = () => {
      fetch('data.json')
        .then(response => response.json())
        .then(data => setRecipes(data))
        .catch(error => console.error('Error loading data:', error));
    };

    loadData();
  }, []);

  return (
    // Background and container padding
    <div className="bg-gray-50 min-h-screen p-4 sm:p-8">
      <header className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Recipe Sharing Platform
        </h1>
        <p className="text-gray-600">Discover and share the best recipes from around the world.</p>
      </header>

      {/* Step 4: Responsive Grid Layout */}
      {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {recipes.map((recipe) => (
          /* Step 3: Card Styling & Interactive Hover Effects */
          <div 
            key={recipe.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            {/* Image Styling - ensures consistent height */}
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-48 object-cover" 
            />
            
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {recipe.summary}
              </p>
              
              {/* Link styled as a button-like call to action */}
              <Link 
                to={`/recipe/${recipe.id}`} 
                className="inline-block text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                View Recipe &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
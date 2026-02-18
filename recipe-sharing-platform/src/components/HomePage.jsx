import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

function HomePage () {
    const [recipes, setRecipes] = useState([])
    
    useEffect(() => {
        const loadData = () => {
            fetch('data.json') //looking for data.json in the public folder
                .then(response => response.json()) //turning response into json object
                .then(data => setRecipes(data)) //putting data into state
                .catch(error => console.error('Error loading data:', error)) //catching any errors
        };

        loadData()
    }, []  //   the empty array means this effect runs only once when the component mounts
)

return (
    <div>
            <h1>Recipe Sharing Platform</h1>
            <div className="recipe-grid">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <img src={recipe.image} alt={recipe.title} />
          <h2>{recipe.title}</h2>
          <p>{recipe.summary}</p>
          <Link to={`/recipes/${recipe.id}`}>
          View Recipe
          </Link>
        </div>
      ))}
    </div>
  </div>
)

}

export default HomePage
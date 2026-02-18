import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* The Home Page Route */}
          <Route path="/" element={<HomePage />} />

          {/* The Detail Page Route with a Dynamic Parameter */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />

          {/* The Add Recipe Form Route */}
          <Route path="/add-recipe" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
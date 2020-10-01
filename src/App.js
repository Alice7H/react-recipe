import React, {useState, useEffect } from 'react';
import './App.css';
import Recipe from './components/Recipe';

function App() {

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    // edamam recipe API
    const API_ID = process.env.REACT_APP_API_ID;
    const API_KEY = process.env.REACT_APP_API_KEY;
  
    const getRecipes = async () => {
      const req = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
      const data = await fetch(req).then(response => response.json())
      if(data !== null || data !== undefined || data !== '') {
        setRecipes(data.hits)
      } else {
        // error
        setRecipes([])
      }
    }
    getRecipes();
    return () => {
      setSearch('')
    }
  }, [query])

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <div className="recipes">
          {recipes.map( (result,index) => (<Recipe recipe={result.recipe} key={index} />))}
        </div>
    </div>
  );
}

export default App;

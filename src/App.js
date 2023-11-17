import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/search?query=${query}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Unsplash Image Search (React)</h1>
      <div>
        <label htmlFor="query">Search:</label>
        <input
          type="text"
          id="query"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {results.map((photo, index) => (
          <img key={index} src={photo.url} alt={`Result ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default App;

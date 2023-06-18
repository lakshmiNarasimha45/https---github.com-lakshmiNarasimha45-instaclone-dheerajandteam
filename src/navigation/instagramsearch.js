import React, { useState } from 'react';

function InstagramSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      // Make an API request to the Instagram search endpoint
      const response = await fetch(`https://api.instagram.com/search?q=${searchQuery}`);
      const data = await response.json();

      // Update the search results state
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error searching Instagram:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.username}</li>
          ))}
        </ul>
      ) : (
        <p>No search results.</p>
      )}
    </div>
  );
}

export default InstagramSearch;

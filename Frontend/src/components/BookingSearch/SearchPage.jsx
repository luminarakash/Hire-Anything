import React, { useState } from 'react';

// Example static data
const categories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Furniture' },
    { id: 3, name: 'Clothing' },
    { id: 4, name: 'Toys' },
    { id: 5, name: 'Books' }
];

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [message, setMessage] = useState('');

    // Handle search functionality
    const handleSearch = () => {
        if (!query) {
            setMessage('Please enter a search term.');
            setResults([]);
            return;
        }

        const lowercasedQuery = query.toLowerCase();
        const filteredResults = categories.filter(category =>
            category.name.toLowerCase().includes(lowercasedQuery)
        );

        if (filteredResults.length > 0) {
            setResults(filteredResults);
            setMessage('');
        } else {
            setResults([]);
            setMessage('No results found. Kindly contact us, and we will provide a solution.');
        }
    };

    return (
        <div>
            <h1>Search Page</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
            />
            <button onClick={handleSearch}>Search</button>

            {/* Display message below the search box */}
            {message && <p style={{ color: 'red' }}>{message}</p>}

            <ul>
                {results.length > 0 && results.map((result) => (
                    <li key={result.id}>{result.name}</li> // Adjust based on your data structure
                ))}
            </ul>
        </div>
    );
};

export default SearchPage;

import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (event) => {
        setQuery(event.target.value);
        if (event.target.value) {
            const response = await axios.get(`http://127.0.0.1:8000/search?query=${event.target.value}`);
            setResults(response.data);
            console.log(response.data);
        } else {
            setResults([]);
        }
    };

    return (
        <div className="App">
            <h1>Поиск по списку</h1>
            <input 
                type="text" 
                placeholder="Найти..." 
                value={query} 
                onChange={handleSearch} 
                className="search-input" 
            />
            <ul className="results-list">
                {results.map((item, index) => (
                    <li key={index} className="result-item">Имя: {item.name} | Возраст: {item.age} | Направление: {item.major}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
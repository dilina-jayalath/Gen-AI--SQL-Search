import React, { useState } from 'react';
import axios from 'axios';

const QueryForm = () => {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/query', { query });
            setResult(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask your question..."
                />
                <button type="submit">Submit</button>
            </form>
            {result && <div><pre>{JSON.stringify(result, null, 2)}</pre></div>}
        </div>
    );
};

export default QueryForm;

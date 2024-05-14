import React, { useEffect, useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string, level: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState('');
  const [level, setLevel] = useState('');

  useEffect(() => {
    onSearch(input, level);
  }, [input, level]); 
  return (
    <div className="flex items-center">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 border rounded mr-2"
        placeholder="Type to Search logs..."
      />
      <select
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All Levels</option>
        <option value="info">Info</option>
        <option value="error">Error</option>
        <option value="success">Success</option>
      </select>
    </div>
  );
}

export default SearchBar;

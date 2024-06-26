import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

import SearchBar from './components/SearchBar';
import LogViewer from './components/LogViewer';
import './App.css';


export interface LogEntry {
  level: string;
  log_string: string;
  timestamp: string;
  metadata: {
    source: string;
  };
}

function App() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [filteredLogs, setFilteredLogs] = useState<LogEntry[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchLogs(currentPage);
  }, [currentPage]);


  const fetchLogs = (page: number) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    };
    axios.get(`${apiUrl}/api/v1/logs?page=${page}`, config)
      .then((response: AxiosResponse) => {
        setLogs(response.data);
        setFilteredLogs(response.data);
        setTotalPages(Math.ceil(response.headers['x-total-count'] / 10));
      })
      .catch((error: any) => console.error('Error fetching logs:', error));
  };

  const handleSearch = (query: string, level: string) => {
    if (!query && !level) {
      setFilteredLogs(logs);
    } else {
      const lowerCaseQuery = query.toLowerCase();
      const filteredData = logs.filter(log =>
        (log.log_string.toLowerCase().includes(lowerCaseQuery) ||
          log.timestamp.toLowerCase().includes(lowerCaseQuery) || log.metadata.source.toLowerCase().includes(lowerCaseQuery) ) &&
        (!level || log.level.toLowerCase().includes(level))
      );
      setFilteredLogs(filteredData);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar onSearch={handleSearch} />
        <LogViewer logs={filteredLogs} currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </header>
    </div>
  );
}


export default App;

import React from 'react';
import { LogEntry } from '../App';

interface LogViewerProps {
  logs: LogEntry[];
  totalPages: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}

const LogViewer: React.FC<LogViewerProps> = ({ logs, totalPages, onPageChange, currentPage }) => {
  return (
    <div className="overflow-auto h-full w-[80%] mt-20 text-white">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="p-2 border-b-2">Timestamp</th>
            <th className="p-2 border-b-2">Level</th>
            <th className="p-2 border-b-2">Log</th>
            <th className="p-2 border-b-2">Source</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index} className="hover:bg-gray-600 text-xs">
              <td className="p-2 border-b">{log.timestamp}</td>
              <td className="p-2 border-b">{log.level}</td>
              <td className="p-2 border-b">{log.log_string}</td>
              <td className="p-2 border-b">{log.metadata.source}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="mx-1 px-2 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          First
        </button>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="mx-1 px-2 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Prev
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="mx-1 px-2 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Next
        </button>
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="mx-1 px-2 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Last
        </button>
      </div>
    </div>
  );
}

export default LogViewer;

import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';
import '../App.css';

const ErrorComponent: React.FC = () => {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/error');

  if (loading) return <div className="centered-container">Loading...</div>;
  if (error) return <div className="centered-container">Error: {error.message}</div>;
  return <div className="centered-container">Data: {JSON.stringify(data)}</div>;
};

export default ErrorComponent;

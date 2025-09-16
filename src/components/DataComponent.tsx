import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';
import '../App.css';

/**
 * Компонент для отображения данных, полученных с помощью хука useJsonFetch.
 * Отображает состояние загрузки, ошибку или данные.
 */

const DataComponent: React.FC = () => {
  const [data, loading, error] = useJsonFetch('/data');

  if (loading) return <div className="centered-container">Loading...</div>;
  if (error) return <div className="centered-container">Error: {error.message}</div>;
  return <div className="centered-container">🎉 Data: {JSON.stringify(data)}</div>;
};

export default DataComponent;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Database = ({ onAddGameResult }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const storedResults = localStorage.getItem('gameResults');
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gameResults', JSON.stringify(results));
  }, [results]);

  const handleAddGameResult = (result) => {
    const newResults = [...results, result];
    setResults(newResults);
    onAddGameResult(newResults);
  };

  return null;
};

Database.propTypes = {
  onAddGameResult: PropTypes.func.isRequired,
};

export default Database;

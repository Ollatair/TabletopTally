import React, { useState } from 'react';

const GameResultForm = () => {
  // Состояния для хранения результатов игры
  const [gameName, setGameName] = useState('');
  const [playerNames, setPlayerNames] = useState('');
  const [scores, setScores] = useState([]);

  // Обработчик изменения названия игры
  const handleGameNameChange = (e) => {
    setGameName(e.target.value);
  };

  // Обработчик изменения имен игроков
  const handlePlayerNamesChange = (e) => {
    setPlayerNames(e.target.value);
  };

  // Обработчик изменения результатов игры
  const handleScoreChange = (e, index) => {
    const newScores = [...scores];
    newScores[index] = parseInt(e.target.value);
    setScores(newScores);
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();

    // Создаем объект с результатами игры
    const gameResult = {
      gameName: gameName,
      playerNames: playerNames.split(',').map(name => name.trim()),
      scores: scores
    };

    // Отправляем результаты на сервер
    // ...
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Название игры:
        <input type="text" value={gameName} onChange={handleGameNameChange} />
      </label>
      <br />
      <label>
        Имена игроков (через запятую):
        <input type="text" value={playerNames} onChange={handlePlayerNamesChange} />
      </label>
      <br />
      {playerNames.split(',').map((name, index) => (
        <label key={index}>
          {name}:
          <input type="number" value={scores[index]} onChange={(e) => handleScoreChange(e, index)} />
        </label>
      ))}
      <br />
      <button type="submit">Добавить результаты игры</button>
    </form>
  );
};

export default GameResultForm;

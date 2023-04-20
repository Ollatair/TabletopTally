import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('/api/games')
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Game List</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {game.name} - {game.publisher}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;

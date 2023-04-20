import React from "react";
import GameList from "../GameList/GameList";
import GameResultForm from "../GameResultForm/GameResultForm";

const Home = () => {
  const handleGameSubmit = () => {
    // Обработчик добавления игры
  };

  const handleGameDelete = () => {
    // Обработчик удаления игры
  };

  return (
    <div className="container">
      <h1>Моя статистика игр</h1>
      <GameResultForm onGameSubmit={handleGameSubmit} />
      <GameList onGameDelete={handleGameDelete} />
    </div>
  );
};

export default Home;

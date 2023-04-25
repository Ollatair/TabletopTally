import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import GameList from './components/GameList';
import UserStats from './components/UserStats';
import DataHandler from './components/DataHandler';
import Database from './components/localStorageDatabase';


function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [games, setGames] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // Загрузка данных о пользователях и играх из базы данных
  useEffect(() => {
    // TODO: добавить код для загрузки данных
  }, []);

  // Обработчик выбора страницы
  function handlePageChange(page) {
    setCurrentPage(page);
  }

  // Обработчик добавления результатов игры
  function handleAddGameResult(gameResult) {
    // TODO: добавить код для добавления результатов игры
  }

  // Обработчик выбора текущего пользователя
  function handleUserSelect(user) {
    setCurrentUser(user);
  }

  return (
    <div>
      <Navbar onPageChange={handlePageChange} />
      {currentPage === "home" && <Home />}
      {currentPage === "gameList" && <GameList games={games} />}
      {currentPage === "gameResultForm" && (
        <GameResultForm
          users={users}
          currentUser={currentUser}
          onAddGameResult={handleAddGameResult}
        />
      )}
      {currentPage === "userStats" && (
        <UserStats users={users} onSelectUser={handleUserSelect} />
      )}
    </div>
  );
}

export default App;
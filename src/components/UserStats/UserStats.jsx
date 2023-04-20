import React, { useState, useEffect } from "react";
import axios from "axios";

const UserStats = () => {
  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    axios
      .get("/api/user/stats")
      .then((response) => setUserStats(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>User Statistics</h2>
      {userStats.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Total Games</th>
              <th>Total Wins</th>
              <th>Win Percentage</th>
            </tr>
          </thead>
          <tbody>
            {userStats.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.totalGames}</td>
                <td>{user.totalWins}</td>
                <td>{user.winPercentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No user statistics available.</p>
      )}
    </div>
  );
};

export default UserStats;

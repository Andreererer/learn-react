import React from "react";
import { useState } from "react";
import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

const users = [
  {
    userName: "Deukae",
    name: "Miguel Angel",
    isFollowing: true,
  },
  {
    userName: "pheralb",
    name: "Pablo Hernandez",
    isFollowing: false,
  },
  { userName: "diego", name: "Diego", isFollowing: false },
];

const userList = users.map(({ userName, name, isFollowing }) => {
  return (
    <TwitterFollowCard
      userName={userName}
      key={userName}
      initialIsFollowing={isFollowing}
    >
      {name}
    </TwitterFollowCard>
  );
});

function App() {
  return <section className="app">{userList}</section>;
}

export default App;

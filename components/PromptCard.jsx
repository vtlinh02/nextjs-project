"use client";
import { useEffect, useState } from "react";

const PromptCard = ({ prompt }) => {
  const [user, setUser] = useState({
    name: "",
    age: "",
  });

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(
        `http://127.0.0.1:8000/user/${prompt.userId}`
      );
      const rawData = await response.json();

      setUser(rawData.data);
    };
    getUser();
  }, []);

  return (
    <div>
      <div>
        <div>{user.name}</div>
        <div>{user.age}</div>
      </div>
      <p>{prompt.content}</p>
      <p>#{prompt.tag}</p>
    </div>
  );
};

export default PromptCard;

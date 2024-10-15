"use client";

import PromptCard from "@components/PromptCard";
import { useEffect, useState } from "react";

const PromptCardList = ({ prompts }) => {
  return (
    <div>
      {prompts.map((prompt) => (
        <PromptCard key={prompt.id} prompt={prompt} />
      ))}
    </div>
  );
};

const Profile = ({ params }) => {
  const userId = params.userId;
  const [allPrompts, setAllPrompts] = useState([]);

  useEffect(() => {
    const getPrompts = async () => {
      const rawResponse = await fetch(
        `http://localhost:8000/prompt/promptsByUserId/${userId}`
      );
      const response = await rawResponse.json();

      setAllPrompts(response.data);
    };
    getPrompts();
  }, []);

  return (
    <section>
      <h1> User{userId}'s Profile</h1>
      <p>These are all prompts created by User{userId}</p>
      <PromptCardList prompts={allPrompts} />
    </section>
  );
};

export default Profile;

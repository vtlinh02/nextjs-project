"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ prompts }) => {
  return (
    <div>
      {prompts.map((prompt) => (
        <PromptCard key={prompt.id} prompt={prompt} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [allPrompts, setAllPrompts] = useState([]);

  useEffect(() => {
    const getPrompts = async () => {
      const response = await fetch("http://localhost:8000/prompt/allPrompts");
      const rawData = await response.json();

      setAllPrompts(rawData.data);
    };
    getPrompts();
  }, []);

  return (
    <div>
      <PromptCardList prompts={allPrompts} />{" "}
    </div>
  );
};

export default Feed;

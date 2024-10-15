"use client";

import { useState } from "react";
import Form from "@components/Form";
import { useRouter } from "next/navigation";

const CreatePrompt = () => {
  const router = useRouter();
  const [post, setPost] = useState({
    content: "",
    tag: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting((prev) => !prev);

    const response = await fetch("http://127.0.0.1:8000/prompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 1,
        content: post.content,
        tag: post.tag,
      }),
    });

    setSubmitting((prev) => !prev);
    router.push("/");
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      handleSubmit={createPrompt}
      submitting={submitting}
    />
  );
};

export default CreatePrompt;

import Link from "next/link";

const Form = ({ type, post, setPost, handleSubmit, submitting }) => {
  return (
    <section>
      <h1> {type} Prompt</h1>
      <p> {type} your own prompt, which will be shown in the home page</p>

      <form onSubmit={handleSubmit}>
        <label>
          <span> Your AI Prompt</span>
          <textarea
            onChange={(e) => setPost({ ...post, content: e.target.value })}
            value={post.mistake}
            required
            placeholder="Write your prompt"
          ></textarea>
        </label>
        <label>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="#tag"
          />
        </label>
        <div>
          <Link href="/">Cancel</Link>
          <button type="submit" disabled={submitting}>
            {submitting ? `${type}ing...` : `${type}`}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;

import { Post } from "./Post/Post";

export const MyPosts = () => {
  return (
    <div>
      <div>
        add Post
        <div>
          <input />
          <button>post</button>
        </div>
      </div>
      <Post text="hi!" likeCount="2" />
      <Post text="My name is Vanya!" likeCount="1" />
      <Post text="whats up" likeCount="5" />
      <Post text="i feel good tododododo..." likeCount="3" />
    </div>
  );
};

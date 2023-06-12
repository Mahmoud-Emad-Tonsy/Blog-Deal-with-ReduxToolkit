import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostsAuthor from "./PostsAuthor";
import TimeAgo from "./TimeAgo";
import React from "react";
import ReactionButtons from "./ReactionButtons";
const PostsList = () => {
  const posts = useSelector(selectAllPosts);
const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  const renderPosts = orderedPosts.map((post) => (
    <div>
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <p className="postCredit">
          <PostsAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </p>
        <ReactionButtons post={post} />
      </article>
    </div>
  ));

  return (
    <div>
      <section>
        <h2>Posts</h2>
        {renderPosts}
      </section>
    </div>
  );
};

export default PostsList;

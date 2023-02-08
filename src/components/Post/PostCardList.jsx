import PostCard from "./PostCard";
import { useState } from "react";

function PostCardList() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "test post 1",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit autem eaque omnis laboriosam sit minus dolore consectetur obcaecati, nobis tenetur accusamus eveniet ipsum maxime temporibus itaque sapiente ducimus consequatur aspernatur.",
    },
    {
      id: 2,
      title: "test post 2",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit autem eaque omnis laboriosam sit minus dolore consectetur obcaecati, nobis tenetur accusamus eveniet ipsum maxime temporibus itaque sapiente ducimus consequatur aspernatur.",
    },
  ]);

  const displayPostCards = () => {
    return posts.map((post) => {
      return <PostCard post={post} key={post.id}/>;
    });
  };

  return <div className="row">{displayPostCards()}</div>;
}

export default PostCardList;

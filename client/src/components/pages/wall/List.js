import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Blog from "./Blog";
import { BlogContainer } from "./blogElements";
const List = () => {
  const { allBlogs } = useSelector((state) => state.blogData);
  console.log(allBlogs);
  return (
    <BlogContainer>
      {allBlogs.map(
        ({ title, authorName, content, _id, likes, dislikes, comments }) => (
          <Blog
            title={title}
            authorName={authorName}
            content={content}
            likes={likes}
            dislikes={dislikes}
            comments={comments}
            key={_id}
            blogId={_id}
          />
        )
      )}
    </BlogContainer>
  );
};

export default List;

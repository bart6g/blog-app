import React from "react";
import { BlogWrapper } from "./blogElements";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../../redux/blog/blogActions";
const Blog = ({
  title,
  authorName,
  content,
  likes,
  dislikes,
  comments,
  blogId,
}) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userData.user);

  return (
    <BlogWrapper>
      <h2>{title}</h2>
      <h4>{authorName}</h4>
      <p>{content}</p>
      <div className="likes">
        <AiFillLike
          onClick={() => dispatch(toggleLike(blogId, user._id, "like"))}
        />{" "}
        {likes.length}
      </div>
      <div className="likes">
        <AiFillDislike
          onClick={() => dispatch(toggleLike(blogId, user._id, "dislike"))}
        />
        {dislikes.length}
      </div>
      <p>comments: {comments.length}</p>
    </BlogWrapper>
  );
};

export default Blog;

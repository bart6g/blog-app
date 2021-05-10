import React, { useState, useEffect } from "react";
import { Form } from "./blogElements";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../../../redux/blog/blogActions";

const NewBlogForm = () => {
  const dispatch = useDispatch();
  const { msg, addingSuccess } = useSelector((state) => state.blogData);
  const { user } = useSelector((state) => state.userData);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [alert, setAlert] = useState();

  const handleAddingBlog = (e) => {
    e.preventDefault();

    const { name, _id } = user.user;
    const blog = {
      title,
      content,
      authorId: _id,
      authorName: name,
    };
    console.group(blog);
    dispatch(addBlog(blog));
  };

  useEffect(() => {
    if (addingSuccess) {
      setTitle("");
      setContent("");
    }
  }, [addingSuccess]);

  return (
    <Form>
      <h2>Create blog</h2>
      <p>{msg}</p>
      <TextField
        id="standard-basic"
        label="Title"
        className="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextareaAutosize
        className="text-area"
        aria-label="empty textarea"
        placeholder="What's on your mind?"
        rowsMin={10}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={(e) => handleAddingBlog(e)}
      >
        Add blog
      </Button>
    </Form>
  );
};

export default NewBlogForm;

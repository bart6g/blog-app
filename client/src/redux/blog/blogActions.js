import axios from "axios";
import { ADD_BLOG, GET_ALL_BLOGS } from "./blogTypes";

export const addBlog = (blog) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/blog/add-blog",
      blog
    );
    if (response) {
      const { msg, success } = response.data;

      dispatch({
        type: ADD_BLOG,
        payload: {
          msg: msg,
          addingSuccess: success,
        },
      });
    }
  } catch (err) {
    dispatch({
      type: ADD_BLOG,
      payload: {
        msg: "Adding failed",
        addingSucces: false,
      },
    });
  }
};

export const getAllBlogs = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/blog/data");
    if (response) {
      const { msg, blogs, success } = response.data;
      dispatch({
        type: GET_ALL_BLOGS,
        payload: {
          msg: msg,
          fetchingSuccess: success,
          blogs: blogs,
        },
      });
    }
  } catch {
    dispatch({
      type: GET_ALL_BLOGS,
      payload: {
        msg: "Fetching failed",
        fetchingSuccess: false,
        blogs: null,
      },
    });
  }
};

export const toggleLike = (blogId, userId, likeType) => async (dispatch) => {
  try {
    console.log("blogId", blogId);
    console.log("userId", userId);
    const response = await axios.post(
      "http://localhost:5000/blog/toggle-like",
      { blogId, userId, likeType: likeType }
    );
    console.log(response);
  } catch (err) {}
};

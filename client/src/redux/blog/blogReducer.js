import { ADD_BLOG, GET_ALL_BLOGS, TOGGLE_LIKE } from "./blogTypes";

const initialState = {
  allBlogs: [],
  addingSuccess: false,
  fetchingSuccess: false,
  actualBlog: {},
  msg: "initial msg",
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOG:
      return {
        ...state,
        msg: action.payload.msg,
        addingSuccess: action.payload.addingSuccess,
      };
    case GET_ALL_BLOGS:
      return {
        ...state,
        msg: action.payload.msg,
        allBlogs: action.payload.blogs,
        fetchingSuccess: action.payload.fetchingSuccess,
      };
    case TOGGLE_LIKE: {
      return state;
    }
    default:
      return state;
  }
};

export default blogReducer;

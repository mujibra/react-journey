import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    title: "",
    description: "",
  },
  blogList: [],
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    handleInputChange: (state, action) => {
      let tempData = { ...state.formData };
      tempData = {
        ...tempData,
        ...action.payload,
      };

      state.formData = tempData;
    },
    handleAddBlog: (state, action) => {
      state.blogList.push({
        id: nanoid(),
        ...state.formData,
      });

      state.formData = {
        title: "",
        description: "",
      };

      localStorage.setItem("blogList", JSON.stringify(state.blogList));
    },
    blogListInitialState: (state, action) => {
      state.blogList = action.payload.blogList;
    },
  },
});

export const { handleInputChange, handleAddBlog, blogListInitialState } =
  blogSlice.actions;

export default blogSlice.reducer;

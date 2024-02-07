import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface BlogState {
  id?: string;
  blog: string;
  author: string;
  quantity: number;
  searchCount: number;
  shared: number;
}

interface Blogs {
  blogs: BlogState[];
}

const initialState: Blogs = {
  blogs: [
    {
      id: "0",
      blog: "sit amet consectetur adipisicing elit. Aspernatur necessitatibus dolor exercitationem non blanditiis voluptatibus, nemo maiores iste vel aliquid officia nihil amet, consectetur natus. Omnis quasi molestias laudantium iusto.",
      author: "lorem ipsum",
      quantity: 3,
      searchCount: 0,
      shared: 0,
    },
    {
      id: "1",
      blog: "Lorem ipsum dolor sit. Aspernatur necessitatibus dolor exercitationem non blanditiis voluptatibus, nemo maiores iste vel aliquid officia nihil amet, consectetur natus. Omnis quasi molestias laudantium iusto.",
      author: "lorem ipsum",
      quantity: 1,
      searchCount: 0,
      shared: 0,
    },
    {
      id: "2",
      blog: "Lorem ipsum dolor sit adipisicing elit. Aspernatur necessitatibus dolor exercitationem non blanditiis voluptatibus, nemo maiores iste vel aliquid officia nihil amet, consectetur natus. Omnis quasi molestias laudantium iusto.",
      author: "lorem ipsum",
      quantity: 10,
      searchCount: 0,
      shared: 0,
    },
    {
      id: "3",
      blog: "Lorem ipsum dolor sit amet consectetur. dolor exercitationem non blanditiis voluptatibus, nemo maiores iste vel aliquid officia nihil amet, consectetur natus. Omnis quasi molestias laudantium iusto.",
      author: "lorem ipsum",
      quantity: 4,
      searchCount: 0,
      shared: 0,
    },
    {
      id: "4",
      blog: "Lorem ipsum dolor sit amet elit. Aspernatur necessitatibus dolor exercitationem non blanditiis voluptatibus, nemo maiores iste vel aliquid officia nihil amet, consectetur natus. Omnis quasi molestias laudantium iusto.",
      author: "lorem ipsum",
      quantity: 14,
      searchCount: 0,
      shared: 0,
    },
    {
      id: "5",
      blog: "adipisicing elit. Aspernatur dolor exercitationem non blanditiis voluptatibus, nemo maiores iste vel aliquid officia nihil amet, consectetur natus. Omnis quasi molestias laudantium iusto.",
      author: "lorem ipsum",
      quantity: 3,
      searchCount: 0,
      shared: 0,
    },
    {
      id: "6",
      blog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor exercitationem non blanditiis voluptatibus, nemo maiores iste vel aliquid officia nihil amet, consectetur natus. Omnis quasi molestias laudantium iusto.",
      author: "lorem ipsum",
      quantity: 7,
      searchCount: 0,
      shared: 0,
    },
    {
      id: "7",
      blog: "Lorem ipsum dolor sit amet. necessitatibus dolor exercitationem non blanditiis voluptatibus, nemo maiores iste vel aliquid officia nihil amet, consectetur natus. Omnis quasi molestias laudantium iusto.",
      author: "lorem ipsum",
      quantity: 4,
      searchCount: 0,
      shared: 0,
    },
    {
      id: "8",
      blog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor exercitationem non blanditiis voluptatibus, nemo maiores iste vel aliquid officia nihil amet, consectetur natus. Omnis quasi molestias laudantium iusto.",
      author: "lorem ipsum",
      quantity: 2,
      searchCount: 0,
      shared: 0,
    },
    {
      id: "9",
      blog: "Lorem ipsum dolor sit amet consectetur. necessitatibus dolor exercitationem non blanditiis voluptatibus, nemo maiores iste vel aliquid officia nihil amet, consectetur natus. Omnis quasi molestias laudantium iusto.",
      author: "lorem ipsum",
      quantity: 3,
      searchCount: 0,
      shared: 0,
    },
    {
      id: "10",
      blog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptatibus, nemo maiores iste vel aliquid officia nihil amet, consectetur natus. Omnis quasi molestias laudantium iusto.",
      author: "lorem ipsum",
      quantity: 8,
      searchCount: 0,
      shared: 0,
    },
    {
      id: "11",
      blog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. nemo maiores iste vel aliquid officia nihil amet, consectetur natus. Omnis quasi molestias laudantium iusto.",
      author: "lorem ipsum",
      quantity: 15,
      searchCount: 0,
      shared: 0,
    },
  ],
};

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    createBlog: (state, action: PayloadAction<BlogState>) => {
      state.blogs.push(action.payload);
    },
  },
});

export const { createBlog } = blogsSlice.actions;
export const selectBlogs = (state: RootState) => state.blogs;
export default blogsSlice.reducer;

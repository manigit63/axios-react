import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// get method
export const getPosts = ({
  page = 1,
  limit = 10,
  sortBy = "id",
  order = "asc",
}) =>
  api.get(
    `/posts?_page=${page}&_limit=${limit}&_sort=${sortBy}&_order=${order}`
  );

// delete method
export const deletePost = (id) => api.delete(`/posts/${id}`);

// post method
export const addPost = (post) => api.post(`/posts/`, post);

// put method
export const updatePost = (id, post) => {
  return api.put(`/posts/${id}`, post);
};

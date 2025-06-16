import React, { useEffect, useState } from "react";
import { addPost, updatePost } from "../services/PostApi";

const Form = ({ data, setData, updateData, setUpdateData }) => {
  // form feilds data
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const addData = async () => {
    const res = await addPost(post);
    // console.log(res);
    if (res.status === 201 || res.status === 200) {
      setData([res.data, ...data]);
      setPost({ title: "", body: "" }); // reset input
    }
  };

  const UpdateTaskData = async () => {
    console.log("updateData : ", updateData);
    // console.log(post);

    const res = await updatePost(updateData.id, post); //postApi method

    setData((prev) => {
      return prev.map((curElem) => {
        return curElem.id == res.data.id ? res.data : curElem;
      });
    });

    setPost({ title: "", body: "" }); // reset input
    setUpdateData({});
  };
	
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formValue = e.nativeEvent.submitter.value;
    if (formValue == "Add Task") {
      addData();
    } else if (formValue == "Update Task") {
      UpdateTaskData();
    }
  };

  // udate or edit function

  useEffect(() => {
    updateData &&
      setPost({
        title: updateData.title || "",
        body: updateData.body || "",
      });
  }, [updateData]);

  const isEmpty = Object.keys(updateData).length === 0;

  return (
    <div className="bg-gray-900 text-white min-h-[30%] flex flex-col items-center justify-start py-10 px-4 transition-all duration-500">
      <h1 className="text-3xl font-bold mb-6 text-center tracking-wide">
        Todo List
      </h1>
      <form
        onSubmit={handleFormSubmit}
        className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 transition-all duration-500 hover:shadow-2xl">
        <input
          type="text"
          placeholder="Task Title"
          name="title"
          value={post.title}
          onChange={handleInputChange}
          className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
        />

        <textarea
          placeholder="Write your task content here..."
          name="body"
          value={post.body}
          onChange={handleInputChange}
          rows={5}
          className="w-full mb-6 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
          value={isEmpty ? "Add Task" : "Update Task"}>
          {isEmpty ? "Add Task" : "Update Task"}
        </button>
      </form>
    </div>
  );
};

export default Form;

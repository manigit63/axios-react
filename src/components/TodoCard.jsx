import React, { useState } from "react";
import { deletePost } from "../services/PostApi";

const TodoCard = ({ item, data, setData, updateData, setUpdateData }) => {
  const { id, title, body } = item;

  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200 || res.status === 204) {
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
      } else {
        console.log("Failed to delete the post", res.status);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleEditBtn = (item) => setUpdateData(item);

  return (
    <div className="flex flex-col justify-between h-full w-full bg-gray-800 text-white shadow-md rounded-2xl p-5 space-y-4 border border-gray-700 hover:shadow-xl transition-all duration-300">
      <p className="text-sm text-gray-400">Task: {id}</p>
      <h1 className="text-xl font-bold text-white ">{title}</h1>

      <p className="text-gray-300">{body}</p>

      <div className="flex justify-between gap-3 pt-2">
        <button
          className=" border border-green-700 font-thin hover:bg-green-700 text-white px-4 py-1 rounded-md transition-all duration-200"
          onClick={()=>handleEditBtn(item)}>
          ✏️ Edit
        </button>
        <button
          className="border border-red-700 hover:bg-red-700 font-thin text-white px-4 py-1 rounded-md transition-all duration-200"
          onClick={() => handleDeletePost(id)}>
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;

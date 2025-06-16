import React, { useEffect, useState } from "react";
import { getPosts } from "../services/PostApi";
import TodoCard from "../components/TodoCard";
import Form from "../components/Form";

const AxiosLearning = () => {
  const [data, setData] = useState([]);  // fakeapi wala data
  const [updateData, setUpdateData] = useState({}); // edit btn ,use for update

  const getPostData = async () => {
    const res = await getPosts({
      page: 1,
      limit: 12,
      sortBy: "id",
      order: "desc",
    });
    console.log(res.data);

    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen transition-all duration-500">
      <Form
        data={data}
        setData={setData}
        updateData={updateData}
        setUpdateData={setUpdateData}
      />
      <br />
      <br />
      <div className="px-6 pb-10">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((item) => (
            <li
              key={item.id}
              className="bg-[#1E2939] text-white shadow-md rounded-xl p-1 hover:shadow-xl transition duration-300 border border-gray-700">
              <TodoCard
                item={item}
                data={data}
                setData={setData}
                updateData={updateData}
                setUpdateData={setUpdateData}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AxiosLearning;

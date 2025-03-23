import React, { useState } from "react";
import { addTodo, deleteTodo, removeTodo } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";

function Todo() {
  const anandList = useSelector((state) => state.todoReducers.anandList);
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState("");

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        🚀 Redux To-Do List
      </h1>

      {/* Input Section */}
      <div className="flex gap-2">
        <input
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
          type="text"
          className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task..."
        />
        <button
          onClick={() => {
            dispatch(addTodo(inputData));
            setInputData("");
          }}
          className="bg-yellow-500 text-white px-4 py-3 rounded-md hover:bg-yellow-600 transition duration-300"
        >
          ➕ Add
        </button>
      </div>

      {/* To-Do List */}
      <ul className="mt-6 space-y-3">
        {anandList.length === 0 ? (
          <p className="text-center text-gray-500">No tasks added yet! 📝</p>
        ) : (
          anandList.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-sm hover:shadow-md transition duration-300"
            >
              <span className="text-gray-700">{todo.data}</span>
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300"
              >
                ❌ Delete
              </button>
            </li>
          ))
        )}
      </ul>

      {/* Reset Button */}
      {anandList.length > 0 && (
        <button
          onClick={() => dispatch(removeTodo())}
          className="w-full mt-6 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition duration-300"
        >
          🔄 Reset All
        </button>
      )}
    </div>
  );
}

export default Todo;

import React, { useState } from 'react'
import { addTodo, deleteTodo, removeTodo } from '../../actions/index'
import { useDispatch, useSelector } from 'react-redux';


function Todo() {

  const anandList = useSelector((state) => state.todoReducers.anandList)
  console.log('Store data :', anandList);
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState('')

  // To get data from store




  return (
    <>
      <div className="max-w-md mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
        <h1>Hellow Redux!</h1>
        <h2 className="text-center text-2xl font-semibold mb-4">To-Do List</h2>

        <div className="mb-4">
          <input
            value={inputData}
            onChange={(event) => setInputData(event.target.value)}
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add a new task..."
          />
          <button
            onClick={() => dispatch(addTodo(inputData), setInputData(''))}
            className="w-full mt-3 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Add Task
          </button>
        </div>
      </div>

      {/* Display To-Do List */}
      <ul className="mt-4">
        {anandList.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-100 p-2 my-2 rounded-md"
          >
            <span>{todo.data}</span>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <button onClick={() => dispatch(removeTodo())}>Rest All</button>

    </>
  )
}

export default Todo
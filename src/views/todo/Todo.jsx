import React from 'react'

function Todo() {
  return (
    <>
      <div className="max-w-md mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
        <h1>Hellow Redux!</h1>
        <h2 className="text-center text-2xl font-semibold mb-4">To-Do List</h2>

        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add a new task..."
          />
          <button
            className="w-full mt-3 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Add Task
          </button>
        </div>
      </div>
    </>
  )
}

export default Todo
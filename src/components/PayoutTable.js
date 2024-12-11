import React, { useState } from "react";

const PayoutTable = ({ data, onRateChange }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedRate, setEditedRate] = useState(null);

  const handleEdit = (index, currentRate) => {
    setEditingIndex(index);
    setEditedRate(currentRate);
  };

  const handleSave = (index, author) => {
    onRateChange(author, editedRate);
    setEditingIndex(null);
    setEditedRate(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setEditedRate(null);
  };

  return (
    <div className="p-4">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Author</th>
            <th className="border border-gray-300 px-4 py-2">Articles</th>
            <th className="border border-gray-300 px-4 py-2">
              Rate per Article
            </th>
            <th className="border border-gray-300 px-4 py-2">Total Payout</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">
                {item.author}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {item.articles}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {editingIndex === index ? (
                  <input
                    type="number"
                    value={editedRate}
                    onChange={(e) => setEditedRate(Number(e.target.value))}
                    className="border p-1 w-full"
                  />
                ) : (
                  item.rate
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ${(item.articles * item.rate).toFixed(2)}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {editingIndex === index ? (
                  <>
                    <button
                      onClick={() => handleSave(index, item.author)}
                      className="bg-green-500 text-white px-2 py-1 mr-2 rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-gray-500 text-white px-2 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => handleEdit(index, item.rate)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayoutTable;

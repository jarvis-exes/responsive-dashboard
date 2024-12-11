import React from "react";

const Filters = ({ onFilter }) => {
  return (
    <div className="flex gap-4 p-4">
      <input
        type="text"
        placeholder="Search by Author"
        onChange={(e) => onFilter("author", e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="date"
        onChange={(e) => onFilter("date", e.target.value)}
        className="border p-3 rounded"
      />
    </div>
  );
};

export default Filters;

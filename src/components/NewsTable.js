import React from "react";

const NewsTable = ({ articles }) => (
  <table className="table-auto w-full mt-4 border-collapse border border-gray-200">
    <thead>
      <tr className="bg-gray-100">
        <th className="border border-gray-300 px-4 py-2">Author</th>
        <th className="border border-gray-300 px-4 py-2">Title</th>
        <th className="border border-gray-300 px-4 py-2">Published Date</th>
      </tr>
    </thead>
    <tbody>
      {articles.map((article, index) => (
        <tr key={index} className="border border-gray-300">
          <td className="border border-gray-300 px-4 py-2">{article.author}</td>
          <td className="border border-gray-300 px-4 py-2">{article.title}</td>
          <td className="border border-gray-300 px-4 py-2">
            {article.publishedAt}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default NewsTable;

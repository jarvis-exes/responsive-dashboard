import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { fetchNews } from "../utils/fetchNews";

const Analytics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getNewsData = async () => {
      const news = await fetchNews();
      const authorData = news.reduce((acc, article) => {
        const author = article.author || "Unknown";
        if (acc[author]) {
          acc[author] += 1;
        } else {
          acc[author] = 1;
        }
        return acc;
      }, {});

      const chartData = Object.keys(authorData).map((author) => ({
        name: author,
        articles: authorData[author],
      }));

      setData(chartData);
    };

    getNewsData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Article Trends by Author</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="articles" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;

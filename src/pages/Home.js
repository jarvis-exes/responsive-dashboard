import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
import Filters from "../components/Filters";
import NewsTable from "../components/NewsTable";
import Analytics from "./Analytics";
import Payout from "./Payout";
import { fetchNews } from "../utils/fetchNews";
import { exportToPDF } from "../utils/exportData";
import Header from "../components/Header";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  // Fetch news when the component mounts
  useEffect(() => {
    (async () => {
      const news = await fetchNews();
      setArticles(news);
      setFilteredArticles(news); // Initialize filteredArticles with all articles
    })();
  }, []);

  // Filter articles based on user input
  const handleFilter = (key, value) => {
    const filtered = articles.filter((article) =>
      article[key]?.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredArticles(filtered);
  };

  // Render content for each tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return (
          <div>
            <Filters onFilter={handleFilter} />
            <div className="flex justify-end mb-4">
              <button
                onClick={() => exportToPDF(filteredArticles)}
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
              >
                Export to PDF
              </button>
            </div>
            <NewsTable articles={filteredArticles} />
          </div>
        );
      case "Analytics":
        return <Analytics />;
      case "Payout":
        return <Payout />;
      default:
        return (
          <div>
            <Filters onFilter={handleFilter} />
            <NewsTable articles={filteredArticles} />
          </div>
        );
    }
  };

  return (
    <div>
      {/* Tabs */}
      <Header />
      <div className="tabs flex justify-center bg-gray-200 p-4">
        {["Dashboard", "Analytics", "Payout"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 mx-2 font-semibold text-gray-700 rounded-lg ${
              activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content p-4">{renderTabContent()}</div>
    </div>
  );
};

export default Home;

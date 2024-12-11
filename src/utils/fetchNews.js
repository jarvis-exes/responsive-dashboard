import axios from "axios";

export const fetchNews = async (query = "technology") => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=982d645f2e8845bca26b316a4d7f4017`
    );
    return response.data.articles;
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return [];
  }
};

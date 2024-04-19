import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

export const fetchNews = async (newsId) => {
  const res = await axios(
    `https://a58e8714b3314a308149aa440a61b107.api.mockbin.io/${newsId}`,
    options
  );

  const resData = res.data.results;

  let newsItem = "";
  resData
    .filter((news) => news.id === newsId)
    .map((news) => {
      newsItem = news;
    });

  return newsItem;
};

export const fetchAllNews = async () => {
  const res = await axios(
    "https://a58e8714b3314a308149aa440a61b107.api.mockbin.io/",
    options
  );

  return res.data.results;
};

export const fetchMessagePresedent = async () => {
  const res = await axios(
    "https://d142ea36de534ad7b849c391944d4c61.api.mockbin.io/",
    options
  );

  console.log(res.data.results);

  return res.data.results[0];
};

export const fetchHistory = async () => {
  const res = await axios(
    "https://8513ef66c3c04b389af686d60bcc6fed.api.mockbin.io/",
    options
  );

  return res.data.results[0];
};

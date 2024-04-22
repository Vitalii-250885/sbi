import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

export const fetchNews = async (newsId) => {
  const res = await axios(
    `https://9745efa08bab4d358255b946dbb79f68.api.mockbin.io/${newsId}`,
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
    "https://9745efa08bab4d358255b946dbb79f68.api.mockbin.io/",
    options
  );

  return res.data.results;
};

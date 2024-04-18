import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/news/";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

export const fetchNews = async (newsId) => {
  const res = await axios(`/${newsId}`, options);

  return res.data;
};

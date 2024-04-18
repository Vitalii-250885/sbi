import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

export const fetchNews = async (newsId) => {
  const res = await axios(`/news/${newsId}`, options);

  return res.data;
};

export const fetchAllNews = async () => {
  const res = await axios("/news", options);

  return res.data;
};

export const fetchMessagePresedent = async () => {
  const res = await axios("/messagePresedent", options);

  return res.data[0];
};

export const fetchHistory = async () => {
  const res = await axios("/history", options);

  return res.data[0];
};

export const fetchBelieve = async () => {
  const res = await axios("/believe", options);

  return res.data;
};

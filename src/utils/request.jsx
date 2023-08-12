import axios from "axios";

const api = axios.create({
  baseURL: "https://quiz-backen2.onrender.com/api/", // Your API base URL
});

const Post = (url, data, callback) => {
  api
    .post(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    })
    .then((res) => {
      callback && callback(res.data, null);
    })
    .catch((err) => {
      callback && callback(null, err.response.data);
    });
};


const Patch = (url, data, callback) => {
  api
    .patch(url, data)
    .then((res) => {
      callback && callback(res.data, null);
    })
    .catch((err) => {
      callback && callback(null, err.response.data);
    });
};

const Get = (url, callback) => {
  api
    .get(url)
    .then((res) => {
      callback && callback(res.data, null);
    })
    .catch((err) => {
      callback && callback(null, err.response.data);
    });
};

const Delete = (url, callback) => {
  api
    .delete(url)
    .then((res) => {
      callback && callback(res.data, null);
    })
    .catch((err) => {
      callback && callback(null, err.response.data);
    });
};

export { Post, Patch, Get, Delete };

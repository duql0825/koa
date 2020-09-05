import axios from "axios";

export const getMember = () => {
  return axios
    .get("/api/Login", {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => {
      return res.data;
    });
};

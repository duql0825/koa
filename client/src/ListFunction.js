import axios from "axios";

export const getList = () => {
  return axios
    .get("/api/tasks", {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => {
      return res.data;
    });
};

export const addTodoList = (term) => {
  return axios
    .post(
      "/api/task",
      {
        task_name: term,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((response) => {
      console.log(response);
    });
};

export const deleteItem = (term) => {
  return axios
    .delete(`/api/task/${term}`, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateItem = (term, id) => {
  return axios
    .put(
      `/api/task/${id}`,
      {
        task_name: term,
      },
      {
        headers: { "Content-type": "applicaton/json" },
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error + "here");
    });
};

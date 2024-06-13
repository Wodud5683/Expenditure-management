import axios from "axios";

const JSON_SERVER_HOST = "http://localhost:5000";

export const getExpenses = async () => {
  try {
    const response = await axios.get(`${JSON_SERVER_HOST}/expenses`);
    return response.data;
  } catch (err) {
    console.log(err);
    alert("");
  }
};

export const getExpense = async ({ queryKey }) => {
  try {
    const response = await axios.get(
      `${JSON_SERVER_HOST}/expenses/${queryKey[1]}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
    alert("");
  }
};

export const postExpense = async (newExpense) => {
  try {
    const response = await axios.post(
      `${JSON_SERVER_HOST}/expenses`,
      newExpense
    );
    return response.data;
  } catch (err) {
    console.log(err);
    alert("");
  }
};

export const putExpense = async (updatedExpense) => {
  const { id, ...rest } = updatedExpense;
  try {
    const response = await axios.put(
      `${JSON_SERVER_HOST}/expenses/${id}`,
      rest
    );
    return response.data;
  } catch (err) {
    console.log(err);
    alert("");
  }
};

export const deleteputExpense = async (id) => {
  try {
    const response = await axios.delete(`${JSON_SERVER_HOST}/expenses/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
    alert("");
  }
};

import axiosMessenger from "./data";

const endpoint = "/users";

const getUserByPhone = async (number) => {
  try {
    const { data } = await axiosMessenger.get(endpoint, {
      params: {
        number,
      },
    });
    return data[0];
  } catch (error) {
    alert(error);
    return null;
  }
};

const getUserByPhonePassword = async (number, password) => {
  try {
    const endpoint = "/users";
    const { data } = await axiosMessenger.get(endpoint, {
      params: {
        number,
        password,
      },
    });
    return data[0];
  } catch (error) {
    alert(error);
    return null;
  }
};

const getUserById = async (id) => {
  try {
    const endpoint = `/users/${id}`;
    const { data } = await axiosMessenger.get(endpoint);
    return data;
  } catch (error) {
    alert(error);
    return null;
  }
};

const getUsers = async () => {
  try {
    const endpoint = "/users";
    const { data } = await axiosMessenger.get(endpoint);
    return data;
  } catch (error) {
    alert(error);
    return [];
  }
};

const createUser = async (user) => {
  try {
    const endpoint = "/users";
    const response = await axiosMessenger.post(endpoint, user);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const editUser = async (user, body) => {
  try {
    const endpoint = `/users/${user}`;
    const response = await axiosMessenger.patch(endpoint, body);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export {
  getUsers,
  getUserByPhone,
  getUserByPhonePassword,
  getUserById,
  createUser,
  editUser,
};

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

export { getUsers, getUserByPhone, getUserByPhonePassword };

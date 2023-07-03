import axiosMessenger from "./data";

const endpoint = "/messages";

const getMessageByuser = async (number) => {
  try {
    const { data } = await axiosMessenger.get(endpoint, {
      params: {
        idUser1: number,
        idUser2: number,
      },
    });
    return data;
  } catch (error) {
    alert(error);
    return null;
  }
};

const getMessages = async () => {
  try {
    const endpoint = "/messages";
    const { data } = await axiosMessenger.get(endpoint);
    return data;
  } catch (error) {
    alert(error);
    return [];
  }
};

export { getMessages, getMessageByuser };

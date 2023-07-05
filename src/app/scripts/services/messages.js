import axiosMessenger from "./data";

const endpoint = "/messages";

const getMessageByuser = async (number) => {
  const users = { chatUser1: [], chatUser2: [] };
  try {
    let resp = await axiosMessenger.get(endpoint, {
      params: { idUser1: number },
    });
    resp.data.forEach((element) => {
      users.chatUser1 = users.chatUser1.concat(element);
    });
    resp = await axiosMessenger.get(endpoint, {
      params: { idUser2: number },
    });
    resp.data.forEach((element) => {
      users.chatUser2 = users.chatUser2.concat(element);
    });

    return users;
  } catch (error) {
    console.error(error);
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

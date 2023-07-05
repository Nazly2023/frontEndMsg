import "../styles/home.scss";
import printChatUser from "./modules/home/printChatUser";
import printUser from "./modules/home/printUser";
import { getMessageByuser } from "./services/messages";
import { editUser, getUserById } from "./services/users";

const appBody = document.getElementById("app");
const chatElement = document.getElementById("chats");

document.addEventListener("DOMContentLoaded", async () => {
  // Obtener el valor del parámetro de consulta
  const urlParams = new URLSearchParams(window.location.search);
  const parametro = urlParams.get("user");

  if (!parametro) {
    window.location.href = "index.html";
  }
  // Decodificar el valor del parámetro
  const objetoJSONDecodificado = decodeURIComponent(parametro);
  // Convertir la cadena de texto JSON en un objeto
  const user = JSON.parse(objetoJSONDecodificado);
  if ("id" in user) {
    const verify = await getUserById(user.id);
    if (!verify) {
      window.location.href = "index.html";
      return;
    }

    const { chatUser1, chatUser2 } = await getMessageByuser(user.id);
    const user1Promises = chatUser1.map((element) =>
      getUserById(element.idUser2)
    );
    const user2Promises = chatUser2.map((element) =>
      getUserById(element.idUser1)
    );
    const user1 = await Promise.all(user1Promises);
    const user2 = await Promise.all(user2Promises);

    printChatUser(chatElement, {
      chatUser1,
      chatUser2,
      user1,
      user2,
    });
    printUser(user, appBody);
    const profile = document.getElementById("profile__conf");
    const confUser = document.getElementById("conf_user");
    const backButton = document.querySelector(".material-symbols-outlined");
    const editButton = document.getElementById("edit");
    const editName = document.getElementById("name__edit");
    const editPhotoButton = document.querySelector(".image__container-photo");
    const editPhoto = document.querySelector(".image__text");

    editPhotoButton.addEventListener("click", async () => {
      editPhoto.classList.remove("hide");
    });

    profile.addEventListener("click", (e) => {
      e.preventDefault();
      confUser.classList.add("active");
    });
    editButton.addEventListener("click", async () => {
      if (editPhoto.value.trim() !== "") {
        const { data } = await editUser(user.id, {
          name: editName.value,
          urlProfileImage: editPhoto.value,
        });
      } else {
        const { data } = await editUser(user.id, {
          name: editName.value,
        });
      }
    });
    const nameConf = document.querySelector(".name__input");
    nameConf.value = user.name;
    backButton.addEventListener("click", (e) => {
      e.preventDefault();
      confUser.classList.remove("active");
    });
  }
});

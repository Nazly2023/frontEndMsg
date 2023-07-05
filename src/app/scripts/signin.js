import "../styles/signin.scss";
import { createUser, getUserByPhone } from "./services/users";
import Swal from "sweetalert2";

const form = document.getElementById("createForm");
const name = document.getElementById("name");
const number = document.getElementById("number");
const password = document.getElementById("password");
const image = document.getElementById("image");
const phrase = document.getElementById("phrase");

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (
      (name.value.trim() === "") |
      (number.value.trim() === "") |
      (password.value.trim() === "")
    ) {
      Swal.fire({
        icon: "warning",
        text: "Por favor, ingrese los campos obligatorios",
      });
      return;
    }
    const user = await getUserByPhone(number.value.trim());
    if (user) {
      Swal.fire({
        icon: "error",
        text: "El usuario con número " + user.number + ", ya está registrado",
      });
      return;
    }
    const response = await createUser({
      name: name.value,
      number: number.value.trim(),
      password: password.value,
      flagConnection: "En línea",
      infoStatus: phrase.value.trim() !== "" ? phrase.value : "",
      lastConnection: new Date(),
      urlProfileImage:
        image.value.trim() !== ""
          ? image.value
          : "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
    });

    if (response.status < 400) {
      Swal.fire({
        // position: "top-end",
        icon: "success",
        title: "Usuario creado exitosamente",
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    }
  });
});

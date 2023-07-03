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
      (password.value.trim() === "") |
      (image.value.trim() === "") |
      (phrase.value.trim() === "")
    ) {
      Swal.fire({
        icon: "warning",
        text: "Por favor, ingrese todos los campos",
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
      name: name.value,
    });
  });
});

import { DateTime } from "luxon";

const now = DateTime.now();

const printChatUser = (container, data) => {
  const { user1, user2, chatUser1, chatUser2 } = data;
  const users = user1.concat(user2);
  const chatUsers = chatUser1.concat(chatUser2);
  let html = "";
  chatUsers.forEach((element) => {
    const chats = element.conversations.sort((a, b) => {
      const fechaA = new Date(a.date);
      const fechaB = new Date(b.date);
      return fechaA - fechaB;
    });
    const fillUsers = users.filter((user) => {
      return (user.id === element.idUser1) | (user.id === element.idUser2);
    });
    let lastConnectionDate = DateTime.fromISO(fillUsers[0].lastConnection);
    lastConnectionDate =
      lastConnectionDate.invalid !== null
        ? DateTime.fromFormat(fillUsers[0].lastConnection, "dd/MM/yyyy H:mm:ss")
        : DateTime.fromISO(fillUsers[0].lastConnection);

    const diffInDays = now.diff(lastConnectionDate, "days").toObject().days;
    const thresholdDays = 7;
    const isRecent = diffInDays <= thresholdDays;

    let lastConnectionText;
    if (isRecent) {
      lastConnectionText = `Hace ${diffInDays} días`;
    } else {
      lastConnectionText = lastConnectionDate.toRelativeCalendar();
    }
    html += `
        <div class="contacto">
            <img src="${fillUsers[0].urlProfileImage}" class="avatarContact">
            <p class="name">${fillUsers[0].name}</p>
            <p class="date">${lastConnectionText}</p>
            <div>
                <img src="../images/chulitoVistoIcon.png" class="readingCheck">
            </div>
            <p class="message">${chats[0].message}</p>
        </div>`;
  });
  container.innerHTML = html;
};

export default printChatUser;

const printChatuser = (container, messages) => {
    const {} = messages
  container.innerHTML += `
        <div class="contacto">
                    <img src="../images/c1.png" class="avatarContact">
                    <p class="nom">Ingrid</p>
                    <p class="date">Lunes</p>
                    <div>
                        <img src="../images/chulitoVistoIcon.png" class="readingCheck">
                    </div>
                    <p class="message">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, id?</p>
                </div>
                <div class="contacto">
                    <img src="../images/c2.png" class="avatarContact">
                    <p class="nom">Alberto</p>
                    <p class="date">Martes</p>
                    <div>
                        <img src="../images/chulitoVistoIcon.png" class="readingCheck">
                    </div>
                    <p class="message">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, id?</p>
                </div>
                <div class="contacto">
                    <img src="../images/c3.png" class="avatarContact">
                    <p class="nom">Luisa</p>
                    <p class="date">Miércoles</p>
                    <div>
                        <img src="../images/chulitoVistoIcon.png" class="readingCheck">
                    </div>
                    <p class="message">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, id?</p>
                </div>
                <div class="contacto">
                    <img src="../images/c4.png" class="avatarContact">
                    <p class="nom">Carlos</p>
                    <p class="date">Jueves</p>
                    <div>
                        <img src="../images/chulitoVistoIcon.png" class="readingCheck">
                    </div>
                    <p class="message">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, id?</p>
                </div>
    `;
};

export default printChatuser;

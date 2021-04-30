const chatList = document.querySelector('.chat-list');
const newchat = document.querySelector('.new-chat');
const newname = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const room = document.querySelector('.char-room');

//updating rooms
newchat.addEventListener('submit', e => {
    e.preventDefault();

    const messege = newchat.messege.value.trim();
    chatrooom.addChat(messege)
    .then(() => newchat.reset())
    .catch((err) => console.log(err));
})

newname.addEventListener('submit', e => {
    e.preventDefault();
    //update usrename
    const newName = newname.name.value.trim();
    chatrooom.updateName(newName);
     //reset the form
    newname.reset();
    //update the hide
    updateMssg.innerHTML = `Your name was updated to ${newName}`;
    setTimeout(() => updateMssg.innerHTML = ' ', 3000);
})

room.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON'){
        chatui.clear();
        chatrooom.updateRoom(e.target.getAttribute('id'));
        chatrooom.getchats(chat => chatui.render(chat));

    }
});

//check local storage
const username = localStorage.username ? localStorage.username : 'anon';
//class instances
const chatui = new ChatUI(chatList);
const chatrooom = new Chatroom('general', username);


//get chats and render
chatrooom.getchats((data) => chatui.render(data));


class Chatroom {
    constructor(room, username){
      this.room = room;
      this.username = username;
      this.chatRoom = db.collection('chatRoom');
    }

    async addChat(messege){
        //format a chat object 
        const now = new Date();
        const chat = {
            messege,
            username: this.username,
            room: this.room,
            created_at:  firebase.firestore.Timestamp.fromDate(now)

        };
        //save chat doc to the data base
        const response = await this.chatRoom.add(chat);
        return response;
    }
    getchats(callback){
      this.unsub = this.chatRoom
      .where('room', '==', this.room)
      .orderBy('created_at')
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added'){
            callback(change.doc.data());
          }
        })
      })
    }
    updateName(username){
      this.username = username;
      localStorage.setItem('username', username);
    }
    updateRoom(room){
      this.room = room;
      if(this.unsub){
        this.unsub();
      }
      
    }
}


/*
setTimeout(() => {
  chatroom.updateRoom('gaming');
  chatroom.updateName('Ali');
  chatroom.getchats((data) => {
    console.log(data);
  });
  chatroom.addChat('hello ali');
}, 3000)*/
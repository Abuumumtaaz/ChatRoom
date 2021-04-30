

class ChatUI {
    constructor(list){
        this.list = list;
    }
    clear(){
        this.list.innerHTML = '';
    }
    render(data){
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            { addSuffix: true }
        );
        const html = `
        <li class="list-group-item mb-1 rounded shadow-lg bg-secondary text-white">
        <span class="username text-uppercase fw-bold">${data.username}</span>
        <span class="messege e">${data.messege}.</span>
        <div class="time text-info ">${when}</div>
        </li>`;

        this.list.innerHTML += html;
    };
 
};
// replies
REPLIES = {
    '哈囉':[
        '嗨~ 我是Roxanne~🥰',
        'Roxanne喊在!😚'
    ],
    '掰掰':[
        '嗯 你也早點休息吧🥺',
        '我...我才沒有想跟你繼續聊呢 哼😤'
    ]
}
RANDOM_REPLY = [
    '嗯嗯嗯',
    '真的假的!!好厲害🥺',
    '喔喔喔原來😂😂',
    '好喔好喔😂'
]


// utility functions
function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}
async function sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
}


// interface render functions
function user_send_msg(msg){
    let current_datetime = new Date();
    current_time = current_datetime.toString().split(" ")[4]
    let html_code = `
        <div class="container darker">
            <img src="img/user.png" alt="User Avatar" class="right" style="width:100%;">
            <p>` + msg + `</p>
            <span class="time-left">` + current_time + `</span>
        </div>
    `;
    
    document.getElementById('last_elem').insertAdjacentHTML('beforebegin', html_code);
    window.scrollTo(0,document.body.scrollHeight);
}
function roxanne_send_msg(msg){
    let current_datetime = new Date();
    current_time = current_datetime.toString().split(" ")[4]
    let html_code = `
        <div class="container">
            <img src="img/roxanne.png" alt="Roxanne Avatar" style="width:100%;">
            <p>` + msg + `</p>
            <span class="time-right">` + current_time + `</span>
        </div>
    `;
    
    document.getElementById('last_elem').insertAdjacentHTML('beforebegin', html_code);
    window.scrollTo(0,document.body.scrollHeight);
}


// main functions
function roxanne_reply(msg){
    for(let k in REPLIES){
        if(msg.includes(k)){
            return choose(REPLIES[k]);
        }
    }
    return choose(RANDOM_REPLY);
}
async function update_msgbox(){
    let msg = document.getElementById('user-text-msg').value;
    document.getElementById('user-text-msg').value = "";
    if(msg != ""){
        user_send_msg(msg);
        let reply = roxanne_reply(msg);
        await sleep(1800);
        roxanne_send_msg(reply);
    }
}
window.onload = async function() {
    let inp = document.getElementById("user-text-msg");
    inp.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit_btn").click();
      }
    });
    
    //await sleep(1500);
    //roxanne_send_msg('希望大家能齊心一起抓出假韓粉');
    //await sleep(1000);
    //roxanne_send_msg('沒有愛與包容，誰又贏得了2020？');
    
};






















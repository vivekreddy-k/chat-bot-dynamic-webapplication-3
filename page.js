let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let chatContainer = document.getElementById("chatContainer");
let userInput = document.getElementById("userInput");
let sendMsgBtn = document.getElementById("sendMsgBtn");
sendMsgBtn.onclick = function() {
    sendMessage();
}

function sendMessage() {
    let msg = userInput.value;
    let msgContainer = document.createElement("div");
    msgContainer.classList.add("msg-to-chatbot-container");
    chatContainer.appendChild(msgContainer);

    let userMsg = document.createElement("span");
    userMsg.textContent = msg;
    userMsg.classList.add("msg-to-chatbot");
    msgContainer.appendChild(userMsg);
    userInput.value = "";

    getReply();
}

console.log(msg);

function getReply() {
    let msgListLen = chatbotMsgList.length;
    let msg = chatbotMsgList[Math.ceil(Math.random() * msgListLen) - 1];
    let msgContainer = document.createElement("div");
    msgContainer.classList.add("msg-from-chatbot-container");
    chatContainer.appendChild(msgContainer);

    let userMsg = document.createElement("span");
    userMsg.textContent = msg;
    userMsg.classList.add("msg-from-chatbot");
    msgContainer.appendChild(userMsg);
}

var messagenumber = 0;
function sendMessage() {
    //affiche le message envoyé sur le tchat box
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value;
    if (message.trim() !== "") {
        var chatBox = document.getElementById("chat-box");
        chatBox.innerHTML += "<div class='message'> <p class='message-sender'>You</p><p> " + message + "</p></div>";
        messageInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
    answerMessage();
}
function sendBotMessage(message){
    var messageInput = document.getElementById("message-input");
    if (message.trim() !== "") {
        var chatBox = document.getElementById("chat-box");
        chatBox.innerHTML += message;
        messageInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
function answerMessage (){
    //envoie la réponse du bot en fonction de la hauteur dans la conversation du bot
    if (messagenumber == 0){
        isverified();
    }
    else{
        messageGPT();
    }
}
function isverified (){
    var isverified = numberverification();
    if (isverified){
        user = "Romain"; //a voir lorsque la bdd sera créer
        message = "<div class='message'> <p class='message-sender'>Bot</p><p>Bonjour " + user + ", sur quel élément de votre santé souhaitez vous avoir un montlhy course?</p></div>";
        messagenumber++;
    }
    else{
        message = "<div class='message'> <p class='message-sender'>Bot</p><p>Nous n'avons pas réussis à vous identifier. Si vous n'êtes pas un de nos clients, nous vous suggerons de venir à la Maison Epigenetic afin que nous puissons vous conseiller au mieux pour votre santé</p></div>";
    }
    sendBotMessage(message);
}
function numberverification(){
    return false; //a faire lorsque la bdd sera créer
}
function messageGPT (){
    
}
document.addEventListener("DOMContentLoaded", function() {
    var messageInput = document.getElementById("message-input");
    
    messageInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value;
    if (message.trim() !== "") {
        var chatBox = document.getElementById("chat-box");
        chatBox.innerHTML += "<div class='message'>" + message + "</div>";
        messageInput.value = "";
        // Faire défiler jusqu'au dernier message
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var messageInput = document.getElementById("message-input");
    
    messageInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});

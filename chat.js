function sendMessage() {
    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;
    
    if (username && message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${username}: ${message}`;
        
        const messages = document.getElementById('messages');
        messages.appendChild(messageElement);
        
        document.getElementById('message').value = '';
        messages.scrollTop = messages.scrollHeight;
    } else {
        alert('Por favor, ingresa un nombre y un mensaje.');
    }
}
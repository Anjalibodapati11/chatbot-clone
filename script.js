const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

// Fake AI Responses
const responses = [
  "Hello! How can I help you?",
  "That's interesting!",
  "Can you tell me more?",
  "Let me think... 🤔",
  "I don't know, but I'm learning!",
  "Great question!",
  "Try asking me something else.",
  "You're doing amazing!"
];

chatForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const userMsg = userInput.value;
  appendMessage('user', userMsg);
  userInput.value = '';

  setTimeout(() => {
    appendMessage('bot', "Typing...");
  }, 500);

  setTimeout(() => {
    const botReply = responses[Math.floor(Math.random() * responses.length)];
    updateLastBotMessage(botReply);
  }, 1500);
});

function appendMessage(sender, message) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);
  msgDiv.textContent = message;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function updateLastBotMessage(newText) {
  const messages = chatBox.querySelectorAll('.bot');
  if (messages.length > 0) {
    messages[messages.length - 1].textContent = newText;
  }
}

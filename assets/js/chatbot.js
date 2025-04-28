document.addEventListener('DOMContentLoaded', () => {
  const sendButton = document.getElementById('send-button');
  const userInput = document.getElementById('user-input');
  const chatMessages = document.querySelector('.chat-messages');

  // Função para adicionar mensagens no chat
  function appendMessage(sender, text) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = text;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Rolagem automática
  }

  // Respostas do bot (mapa de perguntas e respostas)
  const botResponses = {
    'oi': 'Olá! Como posso te ajudar?',
    'tudo bem?': 'Tudo ótimo! E você?',
    'quem é você?': 'Eu sou um chatbot simples!',
    'adeus': 'Até mais! Volte sempre!',
  };

  // Função que simula resposta do bot
  function fetchResponse(userMessage) {
    const normalizedMessage = userMessage.toLowerCase(); // Deixa a mensagem minúscula
    const botReply = botResponses[normalizedMessage] || 'Desculpe, não entendi 😕'; // Pega resposta ou erro
    setTimeout(() => {
      appendMessage('bot', botReply);
    }, 500); // Simula um pequeno atraso na resposta
  }

  // Quando o botão é clicado
  sendButton.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
      appendMessage('user', userMessage);
      userInput.value = '';
      fetchResponse(userMessage);
    }
  });

  // Permite enviar a mensagem com a tecla Enter também
  userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      sendButton.click();
    }
  });
});

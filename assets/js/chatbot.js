import { loadLocalFuriaPlayers, loadTeamInfo } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
  const sendButton = document.getElementById('send-button');
  const userInput = document.getElementById('user-input');
  const chatMessages = document.querySelector('.chat-messages');
  const clearChatButton = document.getElementById('clear-chat-btn');

  // Função para adicionar mensagens no chat
  function appendMessage(sender, text) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = text;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Rolagem automática
  }

  // Respostas do bot
  async function generateBotResponse(userMessage) {
    let botMessage = '';

    if (userMessage.toLowerCase() === 'oi' || userMessage.toLowerCase() === 'olá') {
      botMessage = 'Olá! Como posso ajudar você?';
    } else if (userMessage.toLowerCase() === 'tudo bem?') {
      botMessage = 'Tudo ótimo! E com você?';
    } else if (userMessage.toLowerCase() === 'qual seu nome?') {
      botMessage = 'Eu sou seu assistente virtual!';
    } else if (userMessage.toLowerCase().includes('jogadores')) {
      // Carrega os dados dos jogadores e responde
      const playersData = await loadLocalFuriaPlayers();

      if (playersData) {
        const activePlayers = playersData.activePlayers.map(player => player.name).join(', ');
        const inactivePlayers = playersData.inactivePlayers.map(player => player.name).join(', ');

        botMessage = `Jogadores ativos: ${activePlayers}. Jogadores inativos: ${inactivePlayers}.`;
      } else {
        botMessage = 'Desculpe, não consegui carregar os dados dos jogadores.';
      }
    } else if (userMessage.toLowerCase().includes('informações do time')) {
      // Carrega as informações do time e responde
      const teamInfo = await loadTeamInfo();

      if (teamInfo) {
        const { name, founded, founders, fun_facts } = teamInfo;
        const founderNames = founders.map(founder => founder.name).join(', ');
        const funFacts = fun_facts.join(', ');

        botMessage = `O time ${name} foi fundado em ${founded}. Fundadores: ${founderNames}. Desde sua fundação, a FURIA tem se destacado como uma das principais organizações de e-sports do Brasil e do mundo, com participações notáveis em CS:GO, Rocket League, Valorant, entre outros jogos.`;
      } else {
        botMessage = 'Desculpe, não consegui carregar as informações do time.';
      }
    } else if (userMessage.toLowerCase().includes('fundadores da furia')) {
      const teamInfo = await loadTeamInfo();

      if (teamInfo) {
        const founders = teamInfo.founders.map(founder => `${founder.name} - ${founder.role}: ${founder.bio}`).join('\n');
        botMessage = `Os fundadores da FURIA são:\n${founders}`;
      } else {
        botMessage = 'Desculpe, não consegui carregar as informações sobre os fundadores.';
      }
    }
    else if (userMessage.toLowerCase().includes('conquistas da furia')) {
      const teamInfo = await loadTeamInfo();

      if (teamInfo) {
        const achievements = teamInfo.achievements.join(', ');
        botMessage = `Algumas das maiores conquistas da FURIA incluem:\n${achievements}`;
      } else {
        botMessage = 'Desculpe, não consegui carregar as conquistas da FURIA.';
      }
    }
    else if (userMessage.toLowerCase().includes('onde fica a sede da furia')) {
      const teamInfo = await loadTeamInfo();

      if (teamInfo) {
        const headquarters = teamInfo.headquarters.join(', ');
        botMessage = `A FURIA tem sedes em:\n${headquarters}`;
      } else {
        botMessage = 'Desculpe, não consegui carregar as informações sobre a sede da FURIA.';
      }
    }
    else if (userMessage.toLowerCase().includes('curiosidades sobre a furia')) {
      const teamInfo = await loadTeamInfo();

      if (teamInfo) {
        const funFacts = teamInfo.fun_facts.join(', ');
        botMessage = `Aqui estão algumas curiosidades sobre a FURIA:\n${funFacts}`;
      } else {
        botMessage = 'Desculpe, não consegui carregar as curiosidades sobre a FURIA.';
      }
    }
    else {
      botMessage = 'Desculpe, ainda estou aprendendo! Pode tentar outra pergunta?';
    }

    setTimeout(() => {
      appendMessage('bot', botMessage);
    }, 500); // Pequeno atraso para parecer "pensando"
  }

  // Quando o botão de enviar é clicado
  sendButton.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
      appendMessage('user', userMessage);
      userInput.value = '';
      generateBotResponse(userMessage); // Corrigido
    }
  });

  // Permite enviar a mensagem com a tecla Enter
  userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      sendButton.click();
    }
  });

  // Ações dos botões rápidos
  document.getElementById('jogadores-btn').addEventListener('click', () => {
    appendMessage('user', 'Jogadores');
    generateBotResponse('jogadores');
  });

  document.getElementById('informacoes-time-btn').addEventListener('click', () => {
    appendMessage('user', 'Informações do Time');
    generateBotResponse('informações do time');
  });

  document.getElementById('fundadores-btn').addEventListener('click', () => {
    appendMessage('user', 'Fundadores da FURIA');
    generateBotResponse('fundadores da furia');
  });

  document.getElementById('conquistas-btn').addEventListener('click', () => {
    appendMessage('user', 'Conquistas');
    generateBotResponse('conquistas da furia');
  });

  document.getElementById('sede-btn').addEventListener('click', () => {
    appendMessage('user', 'Sede da FURIA');
    generateBotResponse('onde fica a sede da furia');
  });

  document.getElementById('curiosidades-btn').addEventListener('click', () => {
    appendMessage('user', 'Curiosidades');
    generateBotResponse('curiosidades sobre a furia');
  });

  // Limpar o chat
  clearChatButton.addEventListener('click', () => {
    chatMessages.innerHTML = ''; // Limpa as mensagens do chat
  });
});

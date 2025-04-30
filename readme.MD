#  Chatbot FURIA

Este projeto é um chatbot interativo para fãs da FURIA, uma organização brasileira de e-sports. Ele permite aos usuários interagirem com um bot que responde perguntas sobre o time, jogadores, fundadores, curiosidades e mais.

---

## 🚀 Tecnologias Utilizadas

- **HTML5** e **CSS3** – estrutura e estilização da página
- **JavaScript Vanilla** – lógica do chatbot e manipulação de DOM
- **JSON** – para simular uma base de dados local
- **GitHub Pages** – para deploy estático da aplicação

---

## 📁 Estrutura de Pastas

```plaintext
/

│
├── assets/
|   ├── audio/              # (Reservado para sons do bot)
|   |
│   ├── data/               # Dados locais em JSON
│   │   ├── furiaData.json
│   │   └── furiaTime.json
│   │
│   ├── fonts/              # Fontes personalizadas (se houver)
│   │
│   ├── img/                # Imagens utilizadas na interface
│   │   ├── github.png
│   │   ├── linkdin.png
│   │   └── logo.png
│   │
│   └── js/                 # Scripts JavaScript
│       ├── api.js          # Responsável por carregar os dados JSON
│       └── chatbot.js      # Lógica principal do chatbot
│
├── css/                    # Folhas de estilo CSS organizadas por contexto
│   ├── botMessage.css
│   ├── colors.css
│   ├── footer.css
│   ├── header.css
│   ├── main.css
│   └── style.css
│
├── index.html             # Página HTML principal
|
├── LICENSE                # Licença MIT
|
└── readme.MD              # Arquivo readme.MD

```

---

## 🧠 Funcionalidades do Chatbot

- **Respostas automáticas** com base em palavras-chave
- **Botões rápidos** para interação rápida:
  - Jogadores
  - Informações do Time
  - Fundadores da FURIA
  - Conquistas
  - Sede da FURIA
  - Curiosidades
  - Limpar Chat
- **Mensagens simuladas** do usuário e do bot
- **Scroll automático** para a última mensagem

---

## ⚙️ Funcionamento

- O usuário digita mensagens ou clica em botões rápidos no rodapé.
- O chatbot responde com base em **palavras-chave** ou perguntas específicas.
- Os dados são carregados a partir de arquivos locais (`furiaData.json`, `furiaTime.json`).

### Botões e palavras-chave disponíveis:

- Jogadores
- Informações do Time
- Fundadores da FURIA
- Conquistas
- Sede da FURIA
- Curiosidades
- Limpar Chat

---
## 📌 Planos Futuros

Este projeto ainda está em desenvolvimento e algumas funcionalidades planejadas para o futuro incluem:

- 🔄 **Persistência de dados com Backend**  
  Integrar uma API real para que os dados dos jogadores, informações do time e estatísticas sejam obtidos dinamicamente, eliminando a dependência de arquivos JSON locais.

- 🔐 **Sistema de Login (Talvez)**  
  Implementar um sistema simples de autenticação para permitir que usuários criem perfis, salvem interações e personalizem a experiência no chat.

- 💬 **Histórico de Conversas**  
  Armazenar o histórico do chat localmente ou no backend, para que o usuário possa retomar a conversa onde parou.

- 🌐 **Multiplataforma**  
  Tornar o projeto responsivo para funcionar bem em dispositivos móveis e tablets.

- 💡 **Integração com API externa (caso aplicável)**  
  Se viável, integrar com APIs públicas para obter estatísticas em tempo real ou novidades sobre o time FURIA.

Sinta-se à vontade para sugerir novas ideias ou abrir issues com propostas de melhorias! 🚀

---
## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Se você deseja ajudar a melhorar este projeto, siga estas etapas:

1. **Fork** o repositório
2. Crie uma **branch** para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça suas alterações e **commite**:
   ```bash
   git commit -m "Adiciona minha feature"
   ```
4. Faça o **push** para a sua branch:
   ```bash
   git push origin minha-feature
   ```
5. Abra um **Pull Request**

### 🛠️ Regras para contribuir

- Mantenha o código organizado e siga o padrão do projeto.
- Teste sua funcionalidade antes de enviar.
- Descreva claramente o que sua contribuição faz no Pull Request.
- Se possível, atualize a documentação relacionada.

Muito obrigado por contribuir com este projeto! 🚀

---

## 📄 Direitos Autorais e Créditos

Este projeto foi idealizado e desenvolvido por **Cleber Souza**, com fins educativos e demonstrativos.  
Todos os dados utilizados são fictícios ou públicos, sem qualquer vínculo oficial com a organização FURIA.

- 🔧 Criador: [Cleber Souza](https://github.com/SouzaCleber98)
- 📁 Licença: Este projeto é distribuído sob a licença MIT.  
  Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

Se utilizar este projeto como base, lembre-se de dar os devidos créditos. 😊

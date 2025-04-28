export async function loadLocalFuriaPlayers() {
  try {
    const response = await fetch('../assets/data/furiaTime.json'); // Caminho para o arquivo JSON local
    const jsonData = await response.json(); // Parse do JSON


    // Se quiser acessar os jogadores ativos e inativos, você pode fazer o seguinte:
    const activePlayers = jsonData.active;
    const inactivePlayers = jsonData.inactive;

    return { activePlayers, inactivePlayers }; // Retorna os dados para serem usados
  } catch (error) {
    console.error('Erro ao carregar furiaTime.json:', error);
    return null;  // Em caso de erro, retornamos null
  }
}

export async function loadTeamInfo() {
  try {
    const response = await fetch('../assets/data/furiaData.json');
    const jsonData = await response.json();

    if (jsonData && jsonData.team) {
      const teamInfo = jsonData.team;

      // Retorna as informações do time para serem usadas no chatbot
      return teamInfo;
    } else {
      console.error("Estrutura de dados inválida.");
      return null;
    }
  } catch (error) {
    console.error('Erro ao carregar furiaTime.json:', error);
    return null;  // Em caso de erro, retornamos null
  }
}


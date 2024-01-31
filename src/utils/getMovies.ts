import base_path from '../utils/routeAPI';

export const getMovies = async () => {
  try {
    const response = await fetch(`${base_path}/movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Dados obtidos:', data);
      return data; // Retorna os dados obtidos
    } else {
      const errorData = await response.json();
      console.error('Falha no login:', errorData.message || 'Falha no login.');
    }
  } catch (error) {
    console.error('Erro:', error);
    throw new Error('Erro de conexão. Tente novamente.');
  }
};

export const handleLogin = async (email: string, password: string) => {
  try {
    const response = await fetch(`https://localhost:3001/login`, {//ENVIANDO DADOS PRO BACKEND
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }), //{CORPO DA MENSAGEM SÃO OS DADOS QUE FORAM PEGOS NO FORMULÁRIO}
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Login bem-sucedido:', data);
      localStorage.setItem('flag', 'true') //SIMULANDO TOKEN
    } else {
      const errorData = await response.json();
      console.error('Falha no login:', errorData.message || 'Falha no login.');

    }
  } catch (error) {
    console.error('Erro:', error);
    throw new Error('Erro de conexão. Tente novamente.');
  }
};

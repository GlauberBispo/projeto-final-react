import React, { useState } from 'react';

interface Props {
  apiKey: string;
}

const Faq: React.FC<Props> = ({ apiKey }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = async () => {
    try {
      setIsSpeaking(true);
      const response = await fetch('https://api.voiceresponsive.com/speak', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          text: 'Para acessar os produtos é necessário clicar no botão "Entre | Cadastre-se", criar uma conta e efetuar seu login! Logo após clique em "Produtos" no cabeçalho ou no footer.'
        })
      });

      if (response.ok) {
        // O texto foi lido em voz alta com sucesso
      } else {
        // Houve um erro ao falar o texto em voz alta
        console.error('Erro ao falar o texto em voz alta.');
      }
    } catch (error) {
      console.error('Erro ao se comunicar com a API.', error);
    } finally {
      setIsSpeaking(false);
    }
  };

  return (
    <div>
      <button onClick={handleSpeak} disabled={isSpeaking}>
        {isSpeaking ? 'Lendo...' : 'Ler em voz alta'}
      </button>
    </div>
  );
};

export default Faq;

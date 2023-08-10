import React from 'react';
import BigHero from '../../components/bighero';
import Beneficios from '../../components/beneficios';
import Depoimentos from '../../components/depoimento';
import Faq from '../../components/faq'; // Importe o componente Faq

export default function Home() {
    const apiKey = 'iusTK4QD';
    
  return (
    <>
      <BigHero />
      <Beneficios />
      <Depoimentos />
      <Faq apiKey={apiKey}/> 
    </>
  );
}

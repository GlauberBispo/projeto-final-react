import React from 'react';
import BigHero from '../../components/bighero';
import Beneficios from '../../components/beneficios';
import Depoimentos from '../../components/depoimento';
import Faq from '../../components/faq'; 
import Header from '../../components/header';
import Menu from '../../components/menu';

export default function Home() {
    
    
  return (
    <>
     <Header>
      <Menu/>
    </Header>
      <BigHero />
      <Beneficios />
      <Depoimentos />
      <Faq /> 
    </>
  );
}

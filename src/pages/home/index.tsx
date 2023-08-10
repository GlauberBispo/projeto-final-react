import React from 'react'
import Beneficios from '../../components/beneficios/index'
import BigHero from '../../components/bighero/index'
import './style.css'
import Depoimentos from '../../components/depoimento'

export default function Home () {
    return (
        <>
           <BigHero />
           <Beneficios />
           <Depoimentos />
        </>
    )
}
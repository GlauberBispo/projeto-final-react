import CardInformacaoContato from "../../components/cardInformacaoContato"
import ContatoHookForm from "../../components/contatoHookForm"
import Header from "../../components/header"
import Menu from "../../components/menu"
import MenuAreaLogada from "../../components/menuAreaLogada"
import './styleContato.css'

export default function Contato(){
    return (
        <>
        <section className="sectionContato">
        <Header>
            <MenuAreaLogada />
        </Header>
        <ContatoHookForm/>
        <CardInformacaoContato/>
        </section>
        </>

    )
}
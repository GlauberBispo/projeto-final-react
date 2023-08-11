import CardInformacaoContato from "../../components/cardInformacaoContato"
import ContatoHookForm from "../../components/contatoHookForm"
import Header from "../../components/header"
import Menu from "../../components/menu"
import './styleContato.css'

export default function Contato(){
    return (
        <>
        <section className="sectionContato">
        <Header>
            <Menu/>
        </Header>
        <ContatoHookForm/>
        <CardInformacaoContato/>
        </section>
        </>

    )
}
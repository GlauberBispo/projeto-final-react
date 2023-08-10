import CardInformacaoContato from "../../components/cardInformacaoContato"
import ContatoHookForm from "../../components/contatoHookForm"
import './styleContato.css'

export default function Contato(){
    return (
        <>
        <section className="sectionContato">
        <ContatoHookForm/>
        <CardInformacaoContato/>
        </section>
        </>

    )
}
import MenuBase from "../menuBase";
import './styleMenu.css'


export default function Menu(){
    return(
        <>
        <nav className='linkMenuPrincipal'>
            <MenuBase className="btnSimple" to='/'>Home</MenuBase>
            <MenuBase className="btnSimple" to='/Produtos'>Produtos</MenuBase>
            <MenuBase className="btnSimple" to='/Contato'>Contato</MenuBase>
            <MenuBase className="btnCustom" to='/EntreCadastre-se'>Entre | Cadastre-se</MenuBase>
            
        </nav>
        </>
    )
}
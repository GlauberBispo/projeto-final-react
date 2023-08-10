import MenuBase from "../menuBase";
import './styleMenu.css'


export default function Menu(){
    return(
        <>
        <nav className='linkMenuPrincipal'>
            <MenuBase to='/'>Home</MenuBase>
            <MenuBase to='/Produtos'>Produtos</MenuBase>
            <MenuBase to='/Contato'>Contato</MenuBase>
            <MenuBase className="btnCustom" to='/EntreCadastre-se'>Entre | Cadastre-se</MenuBase>
            
        </nav>
        </>
    )
}
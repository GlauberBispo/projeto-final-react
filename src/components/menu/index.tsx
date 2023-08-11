
import MenuBase from "../menuBase";
import './styleMenu.css'

export default function Menu(){
    return(
        <>
        <nav className='linkMenuPrincipal'>
            <MenuBase className="btnSimple" to='/'>Home</MenuBase>
            <MenuBase className="btnSimple" to='/loginCadastro'>Produtos</MenuBase>
            <MenuBase className="btnSimple" to='/loginCadastro'>Contato</MenuBase>
            <MenuBase className="btnCustom" to='/loginCadastro'>Entre | Cadastre-se</MenuBase>
        </nav>
        </>
    )
}
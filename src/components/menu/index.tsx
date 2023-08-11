
import MenuBase from "../menuBase";
import './styleMenu.css'

interface MenuProps {
    isLoggedIn: boolean;
}

export default function Menu({isLoggedIn}: MenuProps){
    return(
        <>
        <nav className='linkMenuPrincipal'>
            {isLoggedIn ? (
                <>
                    <MenuBase className="btnSimple" to='/'>Home</MenuBase>
                    <MenuBase className="btnSimple" to='/produtos'>Produtos</MenuBase>
                    <MenuBase className="btnSimple" to='/contato'>Contato</MenuBase>
                    <MenuBase className="btnSimple" to='/carrinho'><i className="ph ph-shopping-cart-simple icon"></i></MenuBase>
                    <MenuBase className="btnSimple" to='/'><i className="ph ph-sign-out icon"></i></MenuBase>
                </>
            ):(
                <>
                    <MenuBase className="btnSimple" to='/'>Home</MenuBase>
                    <MenuBase className="btnSimple" to='/loginCadastro'>Produtos</MenuBase>
                    <MenuBase className="btnSimple" to='/loginCadastro'>Contato</MenuBase>
                    <MenuBase className="btnCustom" to='/loginCadastro'>Entre | Cadastre-se</MenuBase>
                </>
            )}
        </nav>
        </>
    )
}
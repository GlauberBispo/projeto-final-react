import MenuBase from "../menuBase";
import './styleMenuAreaLogada.css'


export default function MenuAreaLogada(){
    return(
        <>
        <nav className='linkMenuPrincipal'>
            <MenuBase className="btnSimple" to='/'>Home</MenuBase>
            <MenuBase className="btnSimple" to='/Produtos'>Produtos</MenuBase>
            <MenuBase className="btnSimple" to='/Contato'>Contato</MenuBase>
            <MenuBase className="btnSimple" to='/Carrinho'><i className="ph ph-shopping-cart-simple icon"></i></MenuBase>
            <MenuBase className="btnSimple" to='/'><i className="ph ph-sign-out icon"></i></MenuBase>
            
        </nav>
        </>
    )
}
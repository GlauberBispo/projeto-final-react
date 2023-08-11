import MenuBase from "../menuBase";
import './styleMenuAreaLogada.css'


export default function MenuAreaLogada(){
    return(
        <>
        <nav className='linkMenuPrincipal'>
            <MenuBase className="btnSimple" to='/'>Home</MenuBase>
            <MenuBase className="btnSimple" to='/produtos'>Produtos</MenuBase>
            <MenuBase className="btnSimple" to='/contato'>Contato</MenuBase>
            <MenuBase className="btnSimple" to='/'><i className="ph ph-sign-out icon"></i></MenuBase>
        </nav>
        </>
    )
}
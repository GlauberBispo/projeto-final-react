import MenuBase from "../menuBase";
import './styleMenuAreaLogada.css'
import user from '../../assets/user.svg';



export default function MenuAreaLogada(){
    return(
        <>
        <nav className='linkMenuPrincipal'>
            <MenuBase className="btnSimple" to='/'>Home</MenuBase>
            <div className="login">
                <div className="user">
                    <img src={user} alt="" />                    
                </div>
                <span>Olá! "Nome do usuário"</span>
            </div>
            <MenuBase className="btnSimple" to='/produtos'>Produtos</MenuBase>
            <MenuBase className="btnSimple" to='/contato'>Contato</MenuBase>
            <MenuBase className="btnSimple" to='/'><i className="ph ph-sign-out icon"></i></MenuBase>
        </nav>
        </>
    )
}
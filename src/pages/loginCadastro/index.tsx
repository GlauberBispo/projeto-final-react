import './styleLoginCadastro.css'
import CadastroUser from "../../components/cadastroUser";
import LoginUser from "../../components/loginUser";
import Header from '../../components/header';
import Menu from '../../components/menu';

export default function LoginCadastro(){
    return(
        <div className="containerLoginCadastro">
             <Header>
                <Menu/>
            </Header>
            <LoginUser />
            <CadastroUser />
        </div>
    )
}
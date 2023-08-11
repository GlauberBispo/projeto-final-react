import './styleLoginCadastro.css'
import CadastroUser from "../../components/cadastroUser";
import LoginUser from "../../components/loginUser";

export default function LoginCadastro(){
    return(
        <div className="containerLoginCadastro">
            <LoginUser />
            <CadastroUser />
        </div>
    )
}
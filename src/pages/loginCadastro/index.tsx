import "./styleLoginCadastro.css";
import CadastroUser from "../../components/cadastroUser";
import LoginUser from "../../components/loginUser";
import Header from "../../components/header";
import Menu from "../../components/menu";

export default function LoginCadastro() {
  return (
    <>
      <Header>
        <Menu />
      </Header>
      <div className="containerLoginCadastro">
        <LoginUser />
        <CadastroUser />
      </div>
    </>
  );
}

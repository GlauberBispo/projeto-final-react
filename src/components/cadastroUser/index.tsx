import UserCircle from '../../assets/UserCircle.svg'
import { useState } from "react";
import CadastroForm from "../cadastroHookForm";

interface User{
    nome:string;
    user:string;
    email:string;
    senha:string;
}

const CadastroUser: React.FC = () => {
    const [usuariosCadastrados, setUsuariosCadastrados] = useState<User[]>([]);

    const creatUser = (nome: string, user: string, email:string, senha:string) => {
        const newUser: User = {nome, user, email, senha};
        setUsuariosCadastrados([...usuariosCadastrados, newUser]);
        saveUsersToLocalStorage([...usuariosCadastrados, newUser]);
    }

    const saveUsersToLocalStorage = (users: User[]) => {
        const usersJSON = JSON.stringify(users);
        localStorage.setItem('usuarios', usersJSON);
    }

    return(
        <section className="sectionCadastro">
            <img src={UserCircle} alt="Ícone que representa perfil de usuário" />
            <h2>Não possui uma conta?</h2>
            <h3>Crie uma aqui</h3>
            <CadastroForm onCreateUser={creatUser}/>
        </section>
    )

}

export default CadastroUser;
import { useNavigate } from "react-router-dom";
import LoginForm from "../loginHookForm";
import React, {useState} from "react";

interface User{
    nome: string;
    user: string;
    email: string;
    senha: string;
}

const LoginUser: React.FC = () => {
    const [usuariosCadastrados] = useState<User[]>(() => {
        const savedUserJSON = localStorage.getItem('usuarios');
        return savedUserJSON ? JSON.parse(savedUserJSON) : [];
    })

    const navigate = useNavigate();

    const handleLogin = (user: string, senha: string) => {
        const foundUser = usuariosCadastrados.find(
            (u) => u.user === user  && u.senha === senha
        )

        if (foundUser) {
            navigate('/contato');
        }else{
            alert('Usuario ou senha incorretos')
        }
    }

    return (
        <section>
            <h2>Login</h2>
            <LoginForm onLogin={handleLogin}/>
        </section>
    )
}
export default LoginUser;
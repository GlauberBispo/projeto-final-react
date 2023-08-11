import { Controller, useForm } from "react-hook-form";

interface CadastroFormProps{
    onCreateUser: (
        name: string,
        user: string,
        email: string,
        senha: string,
        isLoggedIn: boolean
    ) => void;

}

interface FormValues {
    nome: string;
    user: string;
    email: string;
    senha: string;
    isLoggedIn:boolean;
  }

const CadastroForm:React.FC<CadastroFormProps> = ({onCreateUser}) => {
    const {reset, control, handleSubmit, formState:{errors}} = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        onCreateUser(data.nome, data.user, data.email, data.senha, data.isLoggedIn);
        alert('Casatro realizado com sucesso!')
        console.log(data);
        reset();
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputs">
                <div>
                    <label htmlFor="nome">Nome</label>
                    <Controller 
                    name="nome"
                    control={control}
                    render={({field}) => 
                    <input {...field} type="text" placeholder="Digite seu nome completo"
                    value={field.value || ''}/>}
                    rules={{required: true}}
                    />
                    {errors.nome && <p>Este campo é obrigatório</p>}
                </div>
                <div>
                    <label htmlFor="user">User</label>
                    <Controller
                    name="user"
                    control={control}
                    render={({field}) => 
                    <input {...field} type="text" placeholder="Digite seu username"
                    value={field.value || ''}
                    />}
                    rules={{required: true}}
                    />
                    {errors.user && <p>Este campo é obrigatório</p>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Controller
                    name="email"
                    control={control}
                    render={({field}) => 
                    <input {...field} type="email" placeholder="Digite um email válido"
                    value={field.value || ''}
                    />}
                    rules={{required: true, pattern:/^\S+@\S+$/i }}
                    />
                    {errors.email && <p>Este campo é obrigatório</p>}
                </div>
                <div>
                <label htmlFor="senha">Senha</label>
                <Controller
                name="senha"
                control={control}
                render={({field}) => 
                <input {...field} type="password"
                placeholder="Digite sua senha"
                value={field.value || ''}
                />
                } 
                rules={{required: true,
                minLength: 8,
                pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i,
                    message:
                    "A senha deve conter pelo menos 8 caracteres, incluindo maiúsculas, minúsculas, números e caracteres especiais.",
                }}}  
                />
                {errors.senha && <p>A senha deve conter pelo menos 8 caracteres, incluindo maiúsculas, minúsculas, números e caracteres especiais.</p>}
                </div>

            </div>
            <button type="submit">Criar<i className="ph-light ph-arrow-circle-right"></i></button>
        </form>
    )

}

export default CadastroForm;
import { Controller, useForm } from "react-hook-form";

interface CadastroFormProps{
    onCreateUser: (
        name: string,
        user: string,
        email: string,
        senha: string,
    ) => void;

}

interface FormValues {
    nome: string;
    user: string;
    email: string;
    senha: string;
  }

const CadastroForm:React.FC<CadastroFormProps> = ({onCreateUser}) => {
    const {reset, control, handleSubmit, formState:{errors}} = useForm<FormValues>();
    
    const onSubmit = (data: FormValues) => {
        onCreateUser(data.nome, data.user, data.email, data.senha);
        alert('Cadastro realizado com sucesso!')
        console.log(data);
        reset();
        window.location.reload()
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
                    <input {...field} type="text" 
                    id="nome"
                    placeholder="Digite seu nome completo"
                    value={field.value || ''}/>}
                    rules={{required: 'Este campo é obrigatório' }}
                    />
                    {errors.nome && <p>{errors.nome.message}</p>}
                </div>
                <div>
                    <label htmlFor="user">User</label>
                    <Controller
                    name="user"
                    control={control}
                    render={({field}) => 
                    <input {...field} type="text" 
                    id="user"
                    placeholder="Digite seu username"
                    value={field.value || ''}
                    />}
                    rules={{required: 'Este campo é obrigatório' }}
                    />
                    {errors.user && <p>{errors.user.message}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Controller
                    name="email"
                    control={control}
                    render={({field}) => 
                    <input {...field} type="email"
                    id="email"
                    placeholder="Digite um email válido"
                    value={field.value || ''}
                    />}
                    rules={{required: 'Este campo é obrigatório', pattern:/^\S+@\S+$/i }}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                <label htmlFor="senha">Senha</label>
                <Controller
                name="senha"
                control={control}
                render={({field}) => 
                <input {...field} type="password"
                id="senha"
                placeholder="Digite sua senha"
                value={field.value || ''}
                />
                } 
                rules={{required: "A senha deve conter pelo menos 8 caracteres, incluindo maiúsculas, minúsculas, números e caracteres especiais.",
                minLength: 8,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i}}  
                />
                {errors.senha && <p>{errors.senha.message}</p>}
                </div>

            </div>
            <button type="submit">Criar<i className="ph-light ph-arrow-circle-right"></i></button>
        </form>
    )

}

export default CadastroForm;
import { Controller, useForm } from "react-hook-form";

interface LoginFormProps{
    onLogin: (
        user:string,
        senha:string
    ) => void;
}

interface FormValues {
    user:string;
    senha:string;
}

const LoginForm: React.FC<LoginFormProps> = ({onLogin}) => {
    const {control, handleSubmit, formState: {errors}} = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        onLogin(data.user, data.senha);
    }

    return(
        <section>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="user">Usuário</label>
                    <Controller
                    name="user"
                    control={control}
                    render={({field}) => (
                    <input 
                    {...field}
                    type="text"
                    placeholder="Digite seu usuário"
                    value={field.value || ""}
                    />
                    )} 
                    rules={{required: true}}
                    />
                    {errors.user && <p>Este campo é obrigatório</p>}
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <Controller
                    name="senha"
                    control={control}
                    render={({field}) => (
                    <input
                    {...field}
                    type="password"
                    placeholder="Digite sua senha"
                    value={field.value || ''}
                    />
                    )}
                    rules={{required: true}}
                    />
                    {errors.senha && <p>Este campo é obrigatório</p>}
                </div>
                <button type="submit">entrar  <i className="ph-light ph-arrow-circle-right"></i></button>
            </form>
        </section>
    )

}

export default LoginForm;
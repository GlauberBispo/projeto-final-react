import { Controller, useForm } from "react-hook-form";
import './styleFormContato.css';

type FormData ={
    firstName: string;
    lastName: string;
    email: string;
    topic: string;
    message: string;
}

export default function ContatoHookForm(){
    const {setValue, control, handleSubmit, formState: {errors}} = useForm<FormData>();
    
    const onSubmit = (data: FormData) =>{
        console.log(data);
        setValue('firstName', ''); 
        setValue('lastName', '');
        setValue('email', '');
        setValue('topic', ''); 
        setValue('message', '');
    }
    return(
        <div className="divFormContato">
            <section className="sectionFormContato">
            <h2>Nos mande uma mensagem!</h2><br />
            <hr /><br />
                <form className='FormContato' onSubmit={handleSubmit(onSubmit)}>
                    <div className="formCampo">
                        <Controller
                            name='firstName'
                            control={control}
                            render={({field}) =>(
                            <input {...field} type='text' placeholder='Nome' />
                            )}
                            rules={{required: true}}
                        />
                        {errors.firstName && <p>Este campo é obrigatório</p>}
                    </div>
                    <div className="formCampo">
                        <Controller 
                        name='lastName'
                        control={control}
                        render={({field}) => (
                            <input {...field} type='text' placeholder='Sobrenome' />
                        )}
                        rules={{required: true}}
                        />
                        {errors.lastName && <p>Este campo é obrigatório</p>}
                    </div>
                    <div className="formCampo">
                        <Controller
                            name='email'
                            control={control}
                            render={({field}) => (
                                <input {...field} type='email' placeholder='E-mail' />
                            )}
                            rules={{required: true, pattern:/^\S+@\S+$/i }}
                        />
                        {errors.email && <p>Insira um e-mail válido.</p>}
                    </div>
                    <div className="formCampo">
                        <label>Assunto:</label>
                        <Controller
                        name='topic'
                        control={control}
                        render={({field}) => (
                            <select {...field} defaultValue={''}>
                                <option value={''} disabled>Selecione um assunto</option>
                                <option value={'Elogio'}>Elogio</option>
                                <option value={'Reclamação'}>Reclamação</option>
                                <option value={'Troca'}>Solicitação de troca</option>
                                <option value={'Financeiro'}>Financeiro</option>
                            </select>
                        )}
                        rules={{required: true}}
                        />
                        {errors.topic && <p>Selecione um assunto.</p>}
                    </div>
                    <div className="formCampo">
                        <Controller
                        name='message'
                        control={control}
                        render={({field}) => (
                            <textarea {...field} rows={12} placeholder='Mensagem'></textarea>
                        )}
                        rules={{required: true}}
                        />
                        {errors.message && <p>Este campo é obrigatório.</p>}
                    </div>
                    <div className="formCampo">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </section>
            
        </div>
        
    )
}
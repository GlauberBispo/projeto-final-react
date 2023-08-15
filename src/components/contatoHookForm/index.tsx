import { Controller, useForm } from "react-hook-form";
import './styleFormContato.css';

interface ContatoHookFormProps {
    onSubmit: (data: FormData) => void;
}

type FormData ={
    firstName: string;
    lastName: string;
    email: string;
    topic: string;
    message: string;
}

export default function ContatoHookForm({ onSubmit }: ContatoHookFormProps){
    const {reset, control, handleSubmit, formState: {errors}} = useForm<FormData>();
    
    const handleFormSubmit = (data: FormData) => {
        onSubmit(data); 
        console.log(data);
        alert("Mensagem enviada com sucesso!");
        reset(); 
    }

    return(
        <div className="divFormContato">
            <section className="sectionFormContato">
            <h2>Nos mande uma mensagem!</h2><br />
            <hr /><br />
                <form className='FormContato' onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className="formCampo">
                        <Controller
                            name='firstName'
                            control={control}
                            render={({field}) =>(
                            <input {...field} type='text'
                            data-testid='firstName'
                            placeholder='Nome'
                            value={field.value || ''} />
                            )}
                            rules={{required: true}}
                        />
                        {errors.firstName && <p>Este campo é obrigatório.</p>}
                    </div>
                    <div className="formCampo">
                        <Controller 
                        name='lastName'
                        control={control}
                        render={({field}) => (
                            <input {...field} type='text'
                            data-testid='lastName'
                            placeholder='Sobrenome'
                            value={field.value || ''} />
                        )}
                        rules={{required: true}}
                        />
                        {errors.lastName && <p>Este campo é obrigatório.</p>}
                    </div>
                    <div className="formCampo">
                        <Controller
                            name='email'
                            control={control}
                            render={({field}) => (
                                <input {...field} type='email' 
                                data-testid='email'
                                placeholder='E-mail'
                                value={field.value || ''} />
                            )}
                            rules={{required: true, pattern:/^\S+@\S+$/i }}
                        />
                        {errors.email && <p>Este campo é obrigatório.</p>}
                    </div>
                    <div className="formCampo">
                        <label>Assunto:</label>
                        <Controller
                        name='topic'
                        control={control}
                        render={({field}) => (
                            <select {...field}
                            data-testid='topic'
                            defaultValue={''} 
                            value={field.value || ''}>
                                <option value={''} disabled>Selecione um assunto</option>
                                <option value={'Elogio'}>Elogio</option>
                                <option value={'Reclamação'}>Reclamação</option>
                                <option value={'Troca'}>Solicitação de troca</option>
                                <option value={'Financeiro'}>Financeiro</option>
                            </select>
                        )}
                        rules={{required: true}}
                        />
                        {errors.topic && <p>Este campo é obrigatório.</p>}
                    </div>
                    <div className="formCampo">
                        <Controller
                        name='message'
                        control={control}
                        render={({field}) => (
                            <textarea {...field} rows={12} 
                            data-testid='message'
                            placeholder='Mensagem'
                            value={field.value || ''}></textarea>
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
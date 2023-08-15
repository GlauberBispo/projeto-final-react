import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './style.css'

interface FormData {
  nome: string;
  comentario: string;
}

interface Comentario {
  nome: string;
  comentario: string;
}

const Avaliacao: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
  } = useForm<FormData>();
  const [comentarios, setComentarios] = useState<Comentario[]>([]);

  const onSubmit = (data: FormData) => {
    const novoComentario = {
      nome: data.nome,
      comentario: data.comentario,
    };

    setComentarios([...comentarios, novoComentario]);
    reset();
  };

  return (
    <div className='form-1'>
      <h2>Nos avalie</h2>
      <form  onSubmit={handleSubmit(onSubmit)}>
        <div className='avaliacao'>
          <label htmlFor="nome">Nome:</label>
          <input
            data-testid="name-input"
            type="text"
            id="nome"
            placeholder='Ex: João'
            {...register('nome', { required: 'Nome é necessário' })}
          />
        </div>
        <div className='avaliacao'>
          <label htmlFor="comentario">Comentário:</label>
          <textarea
            data-testid="comentario-text"
            id="comentario"
            {...register('comentario', { required: 'Comentário é necessário' })}
          />
        </div>
        <button className='btn btn-primary' data-testid="enviar-btn" type="submit">Enviar Comentário</button>
      </form>

      {comentarios.length > 0 && (
        <div>
          <h3 className='comments'>Comentários Enviados:</h3>
          <ul className='list-avaliacao'>
            {comentarios.map((comentario, index) => (
              <li key={index}>
                <strong>{comentario.nome}:</strong> {comentario.comentario}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Avaliacao;

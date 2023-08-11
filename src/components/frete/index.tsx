import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import './style.css'

interface FormData {
  cep: string;
}

interface AddressData {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
}

const Frete: React.FC = () => {
  const { control, handleSubmit, reset, setValue } = useForm<FormData>();
  const [freteValue, setFreteValue] = useState<number | null>(null);
  const [address, setAddress] = useState<AddressData | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      
      const response = await fetch(
        `https://viacep.com.br/ws/${data.cep.replace('-', '')}/json/`
      );

      if (!response.ok) {
        throw new Error('Erro ao consultar o endereço');
      }

      const addressData: AddressData = await response.json();

      setAddress(addressData);

      
      const randomFrete = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
      setFreteValue(randomFrete);

      
      setValue('cep', '');
    } catch (error) {
      console.error('Erro ao consultar o endereço:', error);
    }
  };

  const resetForm = () => {
    reset();
    setFreteValue(null);
    setAddress(null);
  };

  return (
    <div className='frete-container'>
      <h2>Calcular Frete</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='frete-1'>
          <label>CEP:</label>
          <Controller
            name="cep"
            control={control}
            render={({ field }) => <input placeholder='Ex: 00.000-000 ou 00000000' {...field} />}
            rules={{ required: true, pattern: /\d{5}-?\d{3}/ }}
          />
        </div>
        <div className='botoes'>
          <button className='btn btn-primary' type="submit">Calcular CEP</button>
          <button className='btn btn-primary' type="button" onClick={resetForm}>
            Limpar
          </button>
        </div>
      </form>
      {freteValue !== null && (
        <div>
          <p>Valor do Frete: R$ {freteValue.toFixed(2)}</p>
        </div>
      )}
      {address && (
        <div className='address'>
          <h3>Endereço:</h3>
          <p>CEP: {address.cep}</p>
          <p>Logradouro: {address.logradouro}</p>
          <p>Complemento: {address.complemento}</p>
          <p>Bairro: {address.bairro}</p>
          <p>Localidade: {address.localidade}</p>
          <p>UF: {address.uf}</p>
        </div>
      )}
    </div>
  );
};

export default Frete;

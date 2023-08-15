import { render, screen, waitFor} from '@testing-library/react';
import CadastroForm from './index'; 
import userEvent from '@testing-library/user-event';

describe('CadastroForm Component', () => {

    const creatUser = jest.fn();

  test('renders the form elements correctly', () => {

    render(<CadastroForm  onCreateUser={creatUser}/>);
    
    expect(screen.getByLabelText('Nome')).toBeInTheDocument();
    expect(screen.getByLabelText('User')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Senha')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Criar' })).toBeInTheDocument();
  });

  test('display error menssages for invalid inputs', async () =>{
   
    render(<CadastroForm  onCreateUser={creatUser}/>);

    const btnSubmit = screen.getByRole('button', { name: 'Criar' });
    userEvent.click(btnSubmit);

    expect(await screen.findAllByText('Este campo é obrigatório')).toBeTruthy();
    expect(await screen.findByText('A senha deve conter pelo menos 8 caracteres, incluindo maiúsculas, minúsculas, números e caracteres especiais.')).toBeTruthy();
  })

  test('calls onCreateUser with correct data on from submission', async () => {

    render(<CadastroForm  onCreateUser={creatUser}/>);

    userEvent.type(screen.getByLabelText('Nome'), 'Ana Banana')
    userEvent.type(screen.getByLabelText('User'), 'anabanana')
    userEvent.type(screen.getByLabelText('Email'), 'anabanana@exemple.com')
    userEvent.type(screen.getByLabelText('Senha'), 'Password12!')
    userEvent.click(screen.getByRole('button', { name: 'Criar' }))

    await waitFor(() => {
        expect(creatUser).toHaveBeenCalledWith('Ana Banana', 'anabanana', 'anabanana@exemple.com', 'Password12!');
      });

  })
  
});

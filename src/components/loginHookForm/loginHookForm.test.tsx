import { render, screen, waitFor} from '@testing-library/react';
import LoginForm from './index'; 
import userEvent from '@testing-library/user-event';

describe('CadastroForm Component', () => {

    const loginUser = jest.fn();

  test('renders the form elements correctly', () => {

    render(<LoginForm  onLogin={loginUser}/>);
    
    expect(screen.getByLabelText('Username/login')).toBeInTheDocument();
    expect(screen.getByLabelText('Senha')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Entrar' })).toBeInTheDocument();
  });

  test('display error menssages for invalid inputs', async () =>{
   
    render(<LoginForm  onLogin={loginUser}/>);

    const btnSubmit = screen.getByRole('button', { name: 'Entrar' });
    userEvent.click(btnSubmit);

    expect(await screen.findAllByText('Este campo é obrigatório')).toBeTruthy();
  })

  test('calls loginUser with correct data on from submission', async () => {

    render(<LoginForm  onLogin={loginUser}/>);

    userEvent.type(screen.getByLabelText('Username/login'), 'anabanana')
    userEvent.type(screen.getByLabelText('Senha'), 'Password12!')
    userEvent.click(screen.getByRole('button', { name: 'Entrar' }))

    await waitFor(() => {
        expect(loginUser).toHaveBeenCalledWith('anabanana','Password12!');
      });

  })
  
});

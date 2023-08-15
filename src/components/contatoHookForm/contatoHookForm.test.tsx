import { render, screen, waitFor} from '@testing-library/react';
import ContatoHookForm from './index'; 
import userEvent from '@testing-library/user-event';

describe('ContatoHookForm Component', () => {

  const onSubmitMock = jest.fn();

  test('renders the form elements correctly', () => {

    render(<ContatoHookForm onSubmit={onSubmitMock} />);
    
    expect(screen.getByTestId('firstName')).toBeInTheDocument();
    expect(screen.getByTestId('lastName')).toBeInTheDocument();
    expect(screen.getByTestId('email')).toBeInTheDocument();
    expect(screen.getByTestId('topic')).toBeInTheDocument();
    expect(screen.getByTestId('message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Enviar' })).toBeInTheDocument();
  });

  test('display error menssages for invalid inputs', async () =>{
   
    render(<ContatoHookForm onSubmit={onSubmitMock} />);

    const btnSubmit = screen.getByRole('button', { name: 'Enviar' }); 
    userEvent.click(btnSubmit);

    expect(await screen.findAllByText('Este campo é obrigatório.')).toBeTruthy();
  })

  test('calls ContatoHookForm with correct data on from submission', async () => {

    render(<ContatoHookForm onSubmit={onSubmitMock} />);

    userEvent.type(screen.getByTestId('firstName'), 'Ana');
    userEvent.type(screen.getByTestId('lastName'), 'Banana');
    userEvent.type(screen.getByTestId('email'), 'anabanana@example.com');
    userEvent.selectOptions(screen.getByTestId('topic'), 'Elogio');
    userEvent.type(screen.getByTestId('message'), 'Esse é uma mensagem de teste!');
    userEvent.click(screen.getByRole('button', { name: 'Enviar' }));

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith({
        firstName: 'Ana',
        lastName: 'Banana',
        email: 'anabanana@example.com',
        topic: 'Elogio',
        message: 'Esse é uma mensagem de teste!',
      });
    });

  })
  
});

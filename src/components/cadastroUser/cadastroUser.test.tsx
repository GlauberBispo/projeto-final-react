import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CadastroUser from './index';

describe('CadastroUser Component', () => {


    test('renders the CadastroUser component correctly', () => {
        render(<CadastroUser />);
    });

    test('adds a new user on form submission', async () =>{

        const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

        render(<CadastroUser />);

        userEvent.type(screen.getByLabelText('Nome'), 'Ana Banana');
        userEvent.type(screen.getByLabelText('User'), 'anabanana');
        userEvent.type(screen.getByLabelText('Email'), 'anabanana@example.com');
        userEvent.type(screen.getByLabelText('Senha'), 'Password12!');
        userEvent.click(screen.getByRole('button', { name: 'Criar' }));

        await waitFor(() => {
            expect(mockAlert).toHaveBeenCalledWith('Cadastro realizado com sucesso!');
          });

          mockAlert.mockRestore();
    })
})
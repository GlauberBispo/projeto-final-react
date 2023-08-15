import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useNavigate } from 'react-router-dom';
import LoginUser from './index';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('LoginUser Component', () => {
  const mockNavigate = useNavigate as jest.Mock;
  const mockUsers = [
    { nome: 'Ana', user: 'anabanana', email: 'anabanana@example.com', senha: 'Password12!' }
  ];

  beforeEach(() => {
    localStorage.setItem('usuarios', JSON.stringify(mockUsers));
  });

  afterEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  test('navigates to /produtos on successful login', async () => {
    const user = 'anabanana';
    const senha = 'Password12!';
    mockNavigate.mockImplementationOnce(() => {});

    render(<LoginUser />);

    userEvent.type(screen.getByLabelText('Username/login'), user);
    userEvent.type(screen.getByLabelText('Senha'), senha);
    userEvent.click(screen.getByRole('button', { name: 'Entrar' }));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/produtos');
      expect(mockNavigate).toHaveBeenCalledTimes(1);
    });
  });

  test('displays an alert on failed login', async () => {
    const user = 'anabanana';
    const senha = 'SenhaErrada';
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(<LoginUser />);

    userEvent.type(screen.getByLabelText('Username/login'), user);
    userEvent.type(screen.getByLabelText('Senha'), senha);
    userEvent.click(screen.getByRole('button', { name: 'Entrar' }));

    await waitFor(() => {
      expect(mockAlert).toHaveBeenCalledWith('Usuario ou senha incorretos');
    });

    mockAlert.mockRestore();
  });
});

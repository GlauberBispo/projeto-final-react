import { render, screen, } from '@testing-library/react';
import Avaliacao from './index'; 

describe('Avaliacao Component', () => {
  test('renders the form elements correctly', () => {
    render(<Avaliacao />);
    
    expect(screen.getByLabelText('Nome:')).toBeInTheDocument();
    expect(screen.getByLabelText('Comentário:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Enviar Comentário' })).toBeInTheDocument();
  });

  
});

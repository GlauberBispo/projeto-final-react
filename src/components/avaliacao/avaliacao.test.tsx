import { render, screen } from '@testing-library/react';
import Avaliacao from './index';

describe('Avaliacao Component', () => {
  test('should render without errors', () => {
    render(<Avaliacao />);
    
    const nameLabel = screen.getByLabelText('Nome:');
    const commentLabel = screen.getByLabelText('Comentário:');
    const sendButton = screen.getByTestId('enviar-btn');
    
    expect(nameLabel).toBeInTheDocument();
    expect(commentLabel).toBeInTheDocument();
    expect(sendButton).toBeInTheDocument();
  });

  test('', ()=> {
    render(<Avaliacao />)
  })
  
  
});

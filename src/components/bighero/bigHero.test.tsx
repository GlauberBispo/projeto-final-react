import { render, screen } from '@testing-library/react';
import BigHero from './index';

describe('BigHero Component', () => {
  test('should render the component without errors', () => {
    render(<BigHero />);
    
    const title = screen.getByText('Faça a diferença com a EcoViva!');
    const description = screen.getByText(/Apresentamos a você a linha de produtos sustentáveis que vai transformar a maneira como você cuida do planeta./);
    
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  
});

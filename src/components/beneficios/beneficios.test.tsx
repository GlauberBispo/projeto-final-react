import { render, screen } from '@testing-library/react';
import Beneficios from './index';

describe('Beneficios Component', () => {
  test('should render the component without errors', () => {
    render(<Beneficios />);
    
    const modaConscienteHeading = screen.getByText('Moda Consciente:');
    const sustentabilidadeHeading = screen.getByText('Sustentabilidade:');
    const reutilizarReciclarHeading = screen.getByText('Reutilizar e Reciclar:');
    
    expect(modaConscienteHeading).toBeInTheDocument();
    expect(sustentabilidadeHeading).toBeInTheDocument();
    expect(reutilizarReciclarHeading).toBeInTheDocument();
  });

  test('should display the content for each benefit', () => {
    render(<Beneficios />);
    
    const modaConscienteText = screen.getByText(/Nossas roupas são confeccionadas com tecidos ecológicos, reciclados e orgânicos/);
    const sustentabilidadeText = screen.getByText(/Todo material utilizado em nosssos produtos é eco-friendly e não poluente./);
    const reutilizarReciclarText = screen.getByText(/Na Ecoviva, acreditamos no poder da reciclagem e reutilização./);
    
    expect(modaConscienteText).toBeInTheDocument();
    expect(sustentabilidadeText).toBeInTheDocument();
    expect(reutilizarReciclarText).toBeInTheDocument();
  });
});

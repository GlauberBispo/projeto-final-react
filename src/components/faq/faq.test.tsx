import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Faq from './index';

describe('Faq Component', () => {
  it('renders without errors', () => {
    render(<Faq />);
    const faqElement = screen.getByText('FAQ');
    expect(faqElement).toBeInTheDocument();
  });

  it('expands and collapses accordion items', () => {
    render(<Faq />);
    const firstAccordionButton = screen.getByText('Como acessar os produtos?');
    const secondAccordionButton = screen.getByText('Como acessar a página de contato?');

    fireEvent.click(firstAccordionButton);
    const firstAccordionContent = screen.getByText('Para acessar os produtos é necessário clicar no botão "Entre | Cadastre-se"');
    expect(firstAccordionContent).toBeInTheDocument();

    fireEvent.click(secondAccordionButton);
    const secondAccordionContent = screen.getByText('Para acessar a página de contato é necessário clicar no botão "Entre | Cadastre-se"');
    expect(secondAccordionContent).toBeInTheDocument();

    fireEvent.click(firstAccordionButton);
    expect(screen.queryByText('Para acessar os produtos é necessário clicar no botão "Entre | Cadastre-se"')).not.toBeInTheDocument();
  });

  it('displays "Ler em voz alta" button for each accordion item', () => {
    render(<Faq />);
    const lerEmVozAltaButtons = screen.getAllByText('Ler em voz alta');
    expect(lerEmVozAltaButtons).toHaveLength(3);
  });

  it('displays appropriate content when "Ler em voz alta" button is clicked', () => {
    render(<Faq />);
    const lerEmVozAltaButton1 = screen.getByTestId('ler-em-voz-alta-1');
    const lerEmVozAltaButton2 = screen.getByTestId('ler-em-voz-alta-2');
    const lerEmVozAltaButton3 = screen.getByTestId('ler-em-voz-alta-3');

    fireEvent.click(lerEmVozAltaButton1);
    expect(screen.getByText('Para acessar os produtos é necessário clicar no botão "Entre | Cadastre-se"')).toBeInTheDocument();

    fireEvent.click(lerEmVozAltaButton2);
    expect(screen.getByText('Para acessar a página de contato é necessário clicar no botão "Entre | Cadastre-se"')).toBeInTheDocument();

    fireEvent.click(lerEmVozAltaButton3);
    expect(screen.getByText('Sim! Temos na página de produtos. Para chegar lá é necessário clicar no botão "Entre | Cadastre-se"')).toBeInTheDocument();
  });
});

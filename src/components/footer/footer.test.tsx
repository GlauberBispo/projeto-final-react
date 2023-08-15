import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Footer Component', () => {
  it('renders without errors', () => {
    render(<Footer />);
    const footerElement = screen.getByText('Faça a diferença com a EcoViva!');
    expect(footerElement).toBeInTheDocument();
  });

  test('renders product links correctly', () => {
    render(<Footer />);
    const camisetaLink = screen.getByText('Camiseta');
    const ecobagLink = screen.getByText('Ecobag');
    const ecoCupLink = screen.getByText('Eco cup');
    const canecaLink = screen.getByText('Caneca');

    expect(camisetaLink).toBeInTheDocument();
    expect(ecobagLink).toBeInTheDocument();
    expect(ecoCupLink).toBeInTheDocument();
    expect(canecaLink).toBeInTheDocument();
  });

  test('renders copyright and company information', () => {
    render(<Footer />);
    const copyrightText = screen.getByText('Copyright © EcoViva');
    const cnpjText = screen.getByText('EcoViva, CNPJ XX.XXX.XXX/XXXX-XX');
    const privacyPolicyLink = screen.getByText('Políticas de privacidade');

    expect(copyrightText).toBeInTheDocument();
    expect(cnpjText).toBeInTheDocument();
    expect(privacyPolicyLink).toBeInTheDocument();
  });
});

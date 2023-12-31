import React from 'react';
import { render, screen } from '@testing-library/react';
import Depoimentos from './index';

describe('Depoimentos Component', () => {
  test('renders without errors', () => {
    render(<Depoimentos />);
    const depoimentElement = screen.getByText('Sabe, eu nunca fui uma pessoa muito engajada');
    expect(depoimentElement).toBeInTheDocument();
  });

  test('displays the correct user information', () => {
    render(<Depoimentos />);
    const userElement = screen.getByText('Aline Gomes, professora');
    expect(userElement).toBeInTheDocument();
  });

  test('displays the stars image', () => {
    render(<Depoimentos />);
    const starsImage = screen.getByAltText('Estrelas');
    expect(starsImage).toBeInTheDocument();
  });
});

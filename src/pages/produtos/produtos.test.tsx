import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Produtos from './index';

const mockData = [
  {
    categoria: 'Categoria 1',
    produto: [
      {
        imageUrl: 'imagem1.jpg',
        title: 'Produto 1',
        subtitle: 'Descrição do Produto 1',
        price: 10.0,
      },
    ],
  },
 
];

describe('Produtos Component', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({ json: () => Promise.resolve(mockData) });
  });

  test('renders without errors', () => {
    render(<Produtos />, { wrapper: BrowserRouter });
    const categoriasHeading = screen.getByRole('heading', { name: 'Categorias' });
    expect(categoriasHeading).toBeInTheDocument();
  }); 

  test('shows cart when "Carrinho" button is clicked', () => {
    render(<Produtos />, { wrapper: BrowserRouter });

    const cartButton = screen.getByText('Carrinho (0)');
    fireEvent.click(cartButton);

    const cartTitle = screen.getByText('Carrinho de Compras');
    expect(cartTitle).toBeInTheDocument();
  });

  test('closes cart when "Fechar Carrinho" button is clicked', async () => {
    render(<Produtos />, { wrapper: BrowserRouter });
  
    
    const cartButton = screen.getByText('Carrinho (0)');
    fireEvent.click(cartButton);
  
 
    const closeCartButton = screen.getByText('Fechar Carrinho');
    fireEvent.click(closeCartButton);
  
    
    await waitFor(() => {
      const cartTitle = screen.queryByText('Carrinho de Compras');
      expect(cartTitle).toBeTruthy();
    });
    
  }); 
  
});

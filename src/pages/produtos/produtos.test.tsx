import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Produtos from './index';
import { BrowserRouter } from 'react-router-dom';


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

  it('renders without errors', () => {
    render(<Produtos/>, { wrapper: BrowserRouter });
    const headerElement = screen.getByText('Categorias');
    expect(headerElement).toBeInTheDocument();
  });

  it('filters products by category', () => {
    render(<Produtos />, { wrapper: BrowserRouter });

    const categoria1Link = screen.getByText('Categoria 1');
    fireEvent.click(categoria1Link);

    const produtoTitle = screen.getByText('Produto 1');
    expect(produtoTitle).toBeInTheDocument();
  });

  it('adds products to cart', () => {
    render(<Produtos />, { wrapper: BrowserRouter });

    const categoria1Link = screen.getByText('Categoria 1');
    fireEvent.click(categoria1Link);

    const addToCartButton = screen.getByText('Adicionar ao Carrinho');
    fireEvent.click(addToCartButton);

    const cartButton = screen.getByText('Carrinho (1)');
    expect(cartButton).toBeInTheDocument();
  });

  it('removes products from cart', () => {
    render(<Produtos />, { wrapper: BrowserRouter });

    const categoria1Link = screen.getByText('Categoria 1');
    fireEvent.click(categoria1Link);

    const addToCartButton = screen.getByText('Adicionar ao Carrinho');
    fireEvent.click(addToCartButton);

    const removeFromCartButton = screen.getByText('Remover do Carrinho');
    fireEvent.click(removeFromCartButton);

    const cartButton = screen.getByText('Carrinho (0)');
    expect(cartButton).toBeInTheDocument();
  });

  it('adjusts quantity of products in cart', () => {
    render(<Produtos />, { wrapper: BrowserRouter });

    const categoria1Link = screen.getByText('Categoria 1');
    fireEvent.click(categoria1Link);

    const addToCartButton = screen.getByText('Adicionar ao Carrinho');
    fireEvent.click(addToCartButton);

    const increaseQuantityButton = screen.getByText('+');
    fireEvent.click(increaseQuantityButton);

    const quantityText = screen.getByText('Quantidade: 2');
    expect(quantityText).toBeInTheDocument();

    const decreaseQuantityButton = screen.getByText('-');
    fireEvent.click(decreaseQuantityButton);

    const cartButton = screen.getByText('Carrinho (1)');
    expect(cartButton).toBeInTheDocument();
  });

  it('shows cart when "Carrinho" button is clicked', () => {
    render(<Produtos />, { wrapper: BrowserRouter });

    const cartButton = screen.getByText('Carrinho (0)');
    fireEvent.click(cartButton);

    const cartTitle = screen.getByText('Carrinho de Compras');
    expect(cartTitle).toBeInTheDocument();
  });

  it('closes cart when "Fechar Carrinho" button is clicked', () => {
    render(<Produtos />, { wrapper: BrowserRouter });

    const cartButton = screen.getByText('Carrinho (0)');
    fireEvent.click(cartButton);

    const closeCartButton = screen.getByText('Fechar Carrinho');
    fireEvent.click(closeCartButton);

    const cartTitle = screen.queryByText('Carrinho de Compras');
    expect(cartTitle).not.toBeInTheDocument();
  });
});

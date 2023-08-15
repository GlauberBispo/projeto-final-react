/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Frete from './index';

describe('Frete Component', () => {
  test('renders without errors', () => {
    render(<Frete />);
    const headerElement = screen.getByText('Calcular Frete');
    expect(headerElement).toBeInTheDocument();
  });

  test('calculates and displays the freight value and address on submit', async () => {
    render(<Frete />);
    const cepInput = screen.getByTestId('cep-input');
    const calculateButton = screen.getByTestId('calculate-button');

    fireEvent.change(cepInput, { target: { value: '12345-678' } });
    fireEvent.click(calculateButton);

    await waitFor(() => {
      const freteValue = screen.getByTestId('frete-value');
      expect(freteValue).toBeInTheDocument();

      const address = screen.getByTestId('address');
      expect(address).toBeInTheDocument();
    });
  });

  test('clears the form and results on clear button click', async () => {
    render(<Frete />);
    const cepInput = screen.getByTestId('cep-input');
    const calculateButton = screen.getByTestId('calculate-button');
    const clearButton = screen.getByTestId('clear-button');

    fireEvent.change(cepInput, { target: { value: '12345-678' } });
    fireEvent.click(calculateButton);

    await waitFor(() => {
      // eslint-disable-next-line testing-library/no-wait-for-side-effects
      fireEvent.click(clearButton);
      const freteValue = screen.queryByTestId('frete-value');
      expect(freteValue).not.toBeInTheDocument();

      const address = screen.queryByTestId('address');
      expect(address).not.toBeInTheDocument();
    });
  });
  
});

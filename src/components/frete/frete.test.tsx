import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Frete from './index'; // Adjust the import path as needed

describe('Frete Component', () => {
  test('renders without errors', () => {
    render(<Frete />);

    const sectionTitle = screen.getByText("Calcular Frete");

    expect(sectionTitle).toBeInTheDocument();
  });  

 

});

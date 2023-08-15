import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Avaliacao from './index';

describe('Avaliacao Component', () => {
  it('renders without errors', () => {
    render(<Avaliacao />);
    const headerElement = screen.getByText('Nos avalie');
    expect(headerElement).toBeInTheDocument();
  });

  it('allows submitting a comment', async () => {
    render(<Avaliacao />);
    const nameInput = screen.getByTestId('name-input');
    const commentInput = screen.getByTestId('comentario-text');
    const submitButton = screen.getByTestId('enviar-btn');

    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    fireEvent.change(commentInput, { target: { value: 'This is a test comment' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
    const commentElement = screen.getByText('Comentários Enviados:');
    expect(commentElement).toBeTruthy();
    })
    
  });
});



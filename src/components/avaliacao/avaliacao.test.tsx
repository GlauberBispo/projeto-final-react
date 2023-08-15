import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Avaliacao from './index';

describe('Avaliacao Component', () => {
  it('renders without errors', () => {
    render(<Avaliacao />);
    const headerElement = screen.getByText('Nos avalie');
    expect(headerElement).toBeInTheDocument();
  });

  it('allows submitting a comment', () => {
    render(<Avaliacao />);
    const nameInput = screen.getByTestId('name-input');
    const commentInput = screen.getByTestId('comentario-text');
    const submitButton = screen.getByTestId('enviar-btn');

    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    fireEvent.change(commentInput, { target: { value: 'This is a test comment' } });
    fireEvent.click(submitButton);

    const commentElement = screen.getByText('Comentários Enviados:');
    expect(commentElement).toBeInTheDocument();

    const submittedComment = screen.getByText('Test User: This is a test comment');
    expect(submittedComment).toBeInTheDocument();
  });

  it('displays error messages for missing fields', async () => {
    render(<Avaliacao />);
    const submitButton = screen.getByTestId('enviar-btn');
  
    fireEvent.click(submitButton);
  
    const nameError = await screen.findByText('Nome é necessário');
    expect(nameError).not.toBeInTheDocument();
  
    const commentError = await screen.findByText('Comentário é necessário');
    expect(commentError).not.toBeInTheDocument();
  });
  
});

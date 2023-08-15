import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Faq from './index';

describe('Faq Component', () => {
  it('renders without errors', () => {
    render(<Faq />);
    const faqElement = screen.getByText('FAQ');
    expect(faqElement).toBeInTheDocument();
  });  
});

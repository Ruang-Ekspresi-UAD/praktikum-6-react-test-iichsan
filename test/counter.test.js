import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './counter';
import Display from './display'; 


describe('Percobaan - Counter Component', () => {
  // 1. Counter Default Value must be 0
  test('Counter Default Value must be 0', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('count-value');
    expect(countValue).toHaveTextContent('0');
  });

  // 2. Increment works when button clicked
  test('Increment works when button clicked', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('count-value');
    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);
    expect(countValue).toHaveTextContent('1');
  });

  // 3. Decrement works when button clicked
  test('Decrement works when button clicked', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('count-value');
    const decrementButton = screen.getByText('Decrement');
    fireEvent.click(decrementButton);
    expect(countValue).toHaveTextContent('-1');
  });
});

describe('Percobaan - Display Component', () => {
  // 4. Display has correct value
  test('Display has correct value', () => {
    render(<Display value={42} />);
    const displayedValue = screen.getByTestId('display-value');
    expect(displayedValue).toHaveTextContent('42');
  });
});

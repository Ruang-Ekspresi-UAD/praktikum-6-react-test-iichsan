import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './counter'; 
import Greeting from './latihan'; 


describe('Latihan - Counter Component', () => {
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

  // 4. Reset the count using reset button
  test('Reset the count using reset button', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('count-value');
    const incrementButton = screen.getByText('Increment');
    const resetButton = screen.getByText('Reset');

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(resetButton);
    expect(countValue).toHaveTextContent('0');
  });
});

describe('Latihan - Greeting Component', () => {
    // 5. Greeting component with your name
    test('Greeting component with your name', () => {
      render(<Greeting name="Ichsan" />);
      const greetingText = screen.getByTestId('greeting-text');
      expect(greetingText).toHaveTextContent('Hello, Ichsan');
    });
  
    // 6. Greeting component with lecturer name
    test('Greeting component with lecturer name', () => {
      render(<Greeting name="Farid Surya" />);
      const greetingText = screen.getByTestId('greeting-text');
      expect(greetingText).toHaveTextContent('Hello, Farid Surya');
    });
  
    // 7. Triggers alert with correct message when clicked
    test('Triggers alert with correct message when clicked', () => {
      window.alert = jest.fn(); // Mock fungsi alert
      render(<Greeting name="Ichsan" />);
      const alertButton = screen.getByTestId('alert-button');
  
      fireEvent.click(alertButton);
      expect(window.alert).toHaveBeenCalledWith('Hello, Ichsan!');
    });
  });

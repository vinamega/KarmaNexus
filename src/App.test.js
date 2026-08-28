// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders KarmaNexus title', () => {
    render(<App />);
    const titleElement = screen.getByText(/KarmaNexus/i);
    expect(titleElement).toBeInTheDocument();
});

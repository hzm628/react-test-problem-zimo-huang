import { render, screen, fireEvent } from '@testing-library/react';

// import your story from App.stories.js
import { Default } from './App.stories';

// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library
test('Button should display click me initially', () => {
    render(<Default />);
    const button = screen.getByText(/click me/i);
    expect(button).toBeInTheDocument();
});
  
test('Button should change text to thanks on click', () => {
    render(<Default />);
    const button = screen.getByText(/click me/i);
    fireEvent.click(button);
    expect(button).toHaveTextContent(/thanks/i);
});

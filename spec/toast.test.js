import React from 'react';
import { render, cleanup } from '@testing-library/react';
// import "@testing-library/jest-dom";
import Toast from '../client/toast';

afterEach(cleanup);

test('calling render with the same component on the same container shows different values', () => {
  const { getByTestId, rerender } = render(<Toast name="EKTORP" />);
  expect(getByTestId('toast-name').textContent).toBe('EKTORP was saved to the Shopping list.');

  rerender(<Toast name="STRANDMON" />);
  expect(getByTestId('toast-name').textContent).toBe('STRANDMON was saved to the Shopping list.');
});

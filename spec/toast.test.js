import React from 'react';
import { render, cleanup } from '@testing-library/react';
// import "@testing-library/jest-dom";
import Toast from '../client/toast';

test('renders', () => {
  const { asFragment } = render(<Toast name="EKTORP" />);
  expect(asFragment()).toMatchSnapshot();
})
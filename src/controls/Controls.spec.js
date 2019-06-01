import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

import Dashboard from '../dashboard/Dashboard';

describe('<Controls />', () => {
  it('Closes gate and updates button text to Open Gate', () => {
    const { getByText, getByTestId } = render(<Dashboard />);

    // closes gate
    fireEvent.click(getByTestId('openOrClose'));

    // button is updated with option to re-open gate
    getByText(/open gate/i);
  });

  it('Closes and locks gate', () => {
    const { getByText, getByTestId } = render(<Dashboard />);

    // closes gate
    fireEvent.click(getByTestId('openOrClose'));

    // lock gate button is enabled and locks gate
    fireEvent.click(getByTestId('lockOrUnlock'));

    getByText(/unlock gate/i);
  });
});

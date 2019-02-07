import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Dashboard from './Dashboard';

describe('<Dashboard />', () =>{
  it('Renders without crashing', () => {
    render(<Dashboard />);
  });
});

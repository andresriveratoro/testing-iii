import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Display from './Display';


describe('<Display />', () => {
  it('Unlocked and open', () => {
    const { getByText } = render(<Display closed={false} locked={false} /> );

    getByText(/unlocked/i);
    getByText(/open/i);
  });

  it('Unlocked and closed', () => {
    const { getByText } = render(<Display closed={true} locked={false} /> );

    getByText(/unlocked/i);
    getByText(/closed/i);
  });

  it('Locked and closed', () => {
    const { getByText } = render(<Display closed={true} locked={true} /> );

    getByText(/locked/i);
    getByText(/closed/i);
  });
});

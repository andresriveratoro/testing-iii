import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
  it('Displays unlocked and open', () => {
    const { getByText } = render(<Display closed={false} locked={false} /> );
    getByText(/unlocked/i);
    getByText(/open/i);
  });

  it('Displays unlocked and closed', () => {
    const { getByText } = render(<Display closed={true} locked={false} /> );
    getByText(/unlocked/i);
    getByText(/closed/i);
  });

  it('Displays locked and closed', () => {
    const { getByText } = render(<Display closed={true} locked={true} /> );
    getByText(/locked/i);
    getByText(/closed/i);
  });

  it('Uses green-led class when unlocked or open', () => {
    const { getByText } = render(<Display closed={false} locked={false} /> );
    const closed = getByText(/open/i);
    const locked = getByText(/unlocked/i);
    expect(closed.classList[1]).toBe('green-led');
    expect(locked.classList[1]).toBe('green-led');
  });

  it('Uses red-led class when locked or closed', () => {
    const { getByText } = render(<Display closed={true} locked={true} /> );
    const closed = getByText(/closed/i);
    const locked = getByText(/locked/i);
    expect(closed.classList[1]).toBe('red-led');
    expect(locked.classList[1]).toBe('red-led');
  });
});

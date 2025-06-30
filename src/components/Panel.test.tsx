import React from 'react';
import { render, screen } from '@testing-library/react';
import Panel from './Panel';

describe('Panel', () => {
  it('renders the title and children correctly', () => {
    render(
      <Panel title="Test Title">
        <p>This is child content</p>
      </Panel>
    );

    const title = screen.getByText('Test Title')
    const children = screen.getByText('This is child content')

    expect(title).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });
});

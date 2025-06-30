import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ResizableDraggablePanel from './ResizableDraggablePanel';

const setup = () => {
  const mockOnClose = jest.fn();
  const mockOnMove = jest.fn();
  const mockOnResize = jest.fn();

  const props = {
    id: 'id',
    title: 'sample title',
    content: <p>sample content</p>,
    x: 0,
    y: 0,
    width: 100,
    height: 100,
  }

  render(
    <ResizableDraggablePanel
      {...props}
      onClose={mockOnClose}
      onMove={mockOnMove}
      onResize={mockOnResize}
    />
  );

  return {
    mockOnClose,
    mockOnMove,
    mockOnResize,
  }
}

describe('ResizableDraggablePanel', () => {
  it('renders the title, content, close & resize correctly', () => {
    setup();

    const title = screen.getByText('sample title')
    const content = screen.getByText('sample content')
    const close = screen.getByTestId('close');
    const resize = screen.getByTestId('resize');

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(close).toBeInTheDocument();
    expect(resize).toBeInTheDocument();
  });

  it('should call onClose, on close click', () => {
    const { mockOnClose } = setup();

    const close = screen.getByTestId('close');

    fireEvent.click(close);
    
    expect(mockOnClose).toHaveBeenCalled();
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import { container } from 'tsyringe';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    container.clearInstances();
  });

  it('렌더링 테스트', () => {
    render(<App />);
    screen.getByText('Increase');
    screen.getByText('Decrease');
  });

  it('Increase 버튼 클릭', () => {
    render(<App />);
    const btn = screen.getByText('Increase');
    fireEvent.click(btn);
    screen.getAllByText('1');
  });

  it('Increase 버튼 클릭', () => {
    render(<App />);
    const btn = screen.getByText('Increase');
    fireEvent.click(btn);
    fireEvent.click(btn);
    screen.getAllByText('2');
  });
});

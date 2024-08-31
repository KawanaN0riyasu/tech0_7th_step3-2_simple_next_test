import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './page'; // コンポーネントのパスを適宜変更してください

describe('Home component', () => {
  test('renders the heading', () => {
    render(<Home />);
    const heading = screen.getByText(/現在位置を取得する/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders the LocationButton and LocationDisplay components', () => {
    render(<Home />);
    const button = screen.getByRole('button', { name: /位置情報取得/i });
    const locationDisplay = screen.getByText(/取得回数:/i);
    expect(button).toBeInTheDocument();
    expect(locationDisplay).toBeInTheDocument();
  });

  test('updates location and countup on button click', () => {
    render(<Home />);
    const button = screen.getByRole('button', { name: /位置情報取得/i });

    // Mocking geolocation
    global.navigator.geolocation = {
      getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
        success({
          coords: {
            latitude: 35.6895,
            longitude: 139.6917,
          },
        })
      ),
    };

    fireEvent.click(button);

    const latitude = screen.getByText(/35.6895/i);
    const longitude = screen.getByText(/139.6917/i);
    const countup = screen.getByText(/取得回数: 1/i);

    expect(latitude).toBeInTheDocument();
    expect(longitude).toBeInTheDocument();
    expect(countup).toBeInTheDocument();
  });
});
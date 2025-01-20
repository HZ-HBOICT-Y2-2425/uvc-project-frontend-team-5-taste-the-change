import '@testing-library/jest-dom';

vi.mock('$lib/assets', () => ({
  default: 'mock-image-path',
}));
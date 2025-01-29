import { render, fireEvent } from '@testing-library/svelte';
import LandingPage from '../routes/landing/+page.svelte';
import { vi } from 'vitest';

vi.mock('$app/navigation', () => ({
  goto: vi.fn(),
}));

import { goto } from '$app/navigation';

describe('Landing Page', () => {
  it('renders the landing page correctly', () => {
    const { getByText } = render(LandingPage);
    expect(getByText('Embrace a greener plate. One Bite at a Time.')).toBeInTheDocument();
    expect(getByText('Taste the change')).toBeInTheDocument();
  });

  it('renders the welcome message correctly', () => {
    const { getByText } = render(LandingPage);
    expect(
      getByText(
        'Welcome to our website! Here you can find out about your CO2 food- footprint, track your diet, find new recipes and contribute to a greener planet. Have fun exploring our different recipes! Lets get started'
      )
    ).toBeInTheDocument();
  });

  it('renders the Login button correctly', () => {
    const { getByText } = render(LandingPage);
    const loginButton = getByText('Login');
    expect(loginButton).toBeInTheDocument();
    expect(loginButton.closest('button')).toHaveClass('bg-[#d9fdca]');
  });

  it('navigates to the login page when the Login button is clicked', async () => {
    const { getByText } = render(LandingPage);

    const loginButton = getByText('Login');
    await fireEvent.click(loginButton);

    expect(goto).toHaveBeenCalledWith('/landing/login');
  });
});

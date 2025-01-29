import { render, fireEvent } from '@testing-library/svelte';
import DietPage from '../routes/landing/diet/+page.svelte';

//mock `goto` using Vitest's vi.mock
vi.mock('$app/navigation', () => ({
  goto: vi.fn(),
}));

import { goto } from '$app/navigation';

describe('Diet goal page', () => {
  it('renders the diet goal page correctly', () => {
    const { getByText } = render(DietPage);
    expect(getByText('Choose your diet goal')).toBeInTheDocument();
    expect(getByText('Which diet do you wish to achieve?')).toBeInTheDocument();
  });

  it('displays alert when no diet is selected and confirm button is clicked', async () => {
    const { getByText } = render(DietPage);
    window.alert = vi.fn(); // Mock window.alert with Vitest

    const confirmButton = getByText('Confirm diet choice');
    await fireEvent.click(confirmButton);

    expect(window.alert).toHaveBeenCalledWith('Please select your diet goal.');
  });

  it('navigates to the home page when a diet is selected and confirm button is clicked', async () => {
    const { getByText } = render(DietPage);

    //selects a diet
    const vegetarianButton = getByText('Vegetarian');
    await fireEvent.click(vegetarianButton);

    const confirmButton = getByText('Confirm diet choice');
    await fireEvent.click(confirmButton);

    expect(goto).toHaveBeenCalledWith('/');
  });

  it('highlights a diet button when selected', async () => {
    const { getByText } = render(DietPage);

    const veganButton = getByText('Vegan');
    await fireEvent.click(veganButton);

    expect(veganButton.closest('button')).toHaveClass('focus:bg-[#d9fdca]');
  });

  it('allows multiple diet buttons to be selected and does not unselect previous choices', async () => {
    const { getByText } = render(DietPage);

    const pescatarianButton = getByText('Pescatarian');
    const ketoButton = getByText('Keto');

    await fireEvent.click(pescatarianButton);
    await fireEvent.click(ketoButton);

    //verify both buttons have been selected
    expect(pescatarianButton.closest('button')).toHaveClass('focus:bg-[#d9fdca]');
    expect(ketoButton.closest('button')).toHaveClass('focus:bg-[#d9fdca]');
  });
});

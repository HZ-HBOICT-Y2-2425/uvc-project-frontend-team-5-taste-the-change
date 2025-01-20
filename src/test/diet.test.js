import { render } from '@testing-library/svelte';
import DietPage from '../routes/landing/diet/+page.svelte';

describe('Diet goal page', () => {
  it('renders the diet goal page correctly', () => {
    // Render the statistics page component
    const { getByText } = render(DietPage);

    // Test if certain content exists (adjust to what should be on your homepage)
    expect(getByText('Choose your diet goal')).toBeInTheDocument();
  });
});

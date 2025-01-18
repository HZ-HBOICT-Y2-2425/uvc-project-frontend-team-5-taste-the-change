import { render } from '@testing-library/svelte';
import LandingPage from '../routes/landing/+page.svelte';

describe('Landing Page', () => {
  it('renders the landing page correctly', () => {
    // Render the landing page component
    const { getByText } = render(LandingPage);

    // Test if certain content exists (adjust to what should be on your homepage)
    expect(getByText('Embrace a greener plate. One Bite at a Time.')).toBeInTheDocument();
  });
});

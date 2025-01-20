import { render } from '@testing-library/svelte';
import StatisticsPage from '../routes/statistics/+page.svelte';

describe('Statistics page', () => {
  it('renders the statistics page correctly', () => {
    // Render the statistics page component
    const { getByText } = render(StatisticsPage);

    // Test if certain content exists (adjust to what should be on your homepage)
    expect(getByText('Statistics')).toBeInTheDocument();
  });
});

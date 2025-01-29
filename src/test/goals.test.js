import { render, fireEvent, screen } from '@testing-library/svelte';
import GoalsPage from '../routes/goals/+page.svelte';
import { vi } from 'vitest';
import { pickedGoal } from '../stores/pickedGoalStore.js';

vi.mock('$app/navigation', () => ({
  goto: vi.fn(),
}));

import { goto } from '$app/navigation';

beforeEach(() => {
  localStorage.clear();
  vi.restoreAllMocks();
});

describe('Goals Page', () => {
  it('renders the main heading correctly', () => {
    render(GoalsPage, {
      data: { data: { goals: [] } },
    });

    expect(screen.getByText('Choose Your Weekly Goals')).toBeInTheDocument();
  });

  it('displays goals when provided as props', () => {
    const goalsData = [
      { id: 1, goal: 'Reduce meat consumption', description: 'Eat only plant-based meals for 3 days this week.', status: 'available' },
      { id: 2, goal: 'Minimize food waste', description: 'Save leftovers and avoid waste.', status: 'available' },
    ];

    render(GoalsPage, {
      data: { data: { goals: goalsData } },
    });

    expect(screen.getByText('Reduce meat consumption')).toBeInTheDocument();
    expect(screen.getByText('Minimize food waste')).toBeInTheDocument();
  });

  it('displays "Picked" on the button when a goal has already been selected', () => {
    pickedGoal.set({ id: 1, goal: 'Reduce meat consumption' });
  
    const goalsData = [
      { id: 1, goal: 'Reduce meat consumption', description: 'Eat only plant-based meals for 3 days this week.', status: 'picked' },
    ];
  
    render(GoalsPage, {
      data: { data: { goals: goalsData } },
    });
  
    const pickButton = screen.getByText('Picked');
    expect(pickButton).toBeInTheDocument();
  });
  

  it('navigates to the progress page when the "Collect Leaves" button is clicked', async () => {
    render(GoalsPage, {
      data: { data: { goals: [] } },
    });

    const collectButton = screen.getByText('Collect Leaves');
    await fireEvent.click(collectButton);

    expect(goto).toHaveBeenCalledWith(expect.stringContaining('/goals/progress'));
  });
});

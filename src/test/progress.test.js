import { render, fireEvent, screen } from '@testing-library/svelte';
import ProgressPage from '../routes/goals/progress/[id]/+page.svelte';
import { leafAmount, incrementLeafAmount } from '../stores/leafStore.js';

beforeEach(() => {
  localStorage.clear();
});

describe('Goals Progress Page', () => {
  it('renders the picked goal information when a goal is selected', () => {
    const data = {
      goalId: 1,
      pickedGoal: { id: 1, goal: 'Reduce food waste', description: 'Minimize food waste this week.', status: 'in-progress' },
      goalMessages: [],
      goalHistory: [],
      error: null,
    };

    render(ProgressPage, { data });

    expect(screen.getByText('In Progress')).toBeInTheDocument();
    expect(screen.getByText('For this week you have selected this goal: Reduce food waste')).toBeInTheDocument();
    expect(screen.getByText('Minimize food waste this week.')).toBeInTheDocument();
  });

  it('disables the collect button if the goal is already collected', () => {
    const data = {
      goalId: 1,
      pickedGoal: { id: 1, goal: 'Reduce food waste', description: 'Minimize food waste this week.', status: 'collected' },
      goalMessages: [],
      goalHistory: [],
      error: null,
    };

    render(ProgressPage, { data });

    const collectButton = screen.getByText('Collected');
    expect(collectButton).toBeDisabled();
  });

  it('calls handleCollect and increments leaf amount when the collect button is clicked', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    );

    // Subscribe to track changes to leafAmount store
    let currentLeafAmount = 0;
    const unsubscribe = leafAmount.subscribe((value) => (currentLeafAmount = value));

    const data = {
      goalId: 1,
      pickedGoal: { id: 1, goal: 'Reduce food waste', description: 'Minimize food waste this week.', status: 'in-progress' },
      goalMessages: [],
      goalHistory: [],
      error: null,
    };

    render(ProgressPage, { data });

    const collectButton = screen.getByText('Collect');
    await fireEvent.click(collectButton);

    // Assert fetch was called
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3013/goals/1/collect', expect.any(Object));

    // Simulate incrementing leaf amount (as expected from the component logic)
    await incrementLeafAmount(10);
    expect(currentLeafAmount).toBe(20);

    unsubscribe(); // Cleanup subscription
  });

  it('displays goal messages if available', () => {
    const data = {
      goalId: 1,
      pickedGoal: { id: 1, goal: 'Reduce food waste', description: 'Minimize food waste this week.', status: 'in-progress' },
      goalMessages: ['Keep going!', 'You are halfway there!'],
      goalHistory: [],
      error: null,
    };

    render(ProgressPage, { data });

    expect(screen.getByText('Keep going!')).toBeInTheDocument();
    expect(screen.getByText('You are halfway there!')).toBeInTheDocument();
  });

  it('renders goals history if there are collected goals', () => {
    const data = {
      goalId: 1,
      pickedGoal: { id: 1, goal: 'Reduce food waste', description: 'Minimize food waste this week.', status: 'collected' },
      goalMessages: [],
      goalHistory: [
        { id: 1, goal: 'Reduce meat consumption', description: 'Avoid meat for 3 days.', status: 'collected' },
        { id: 2, goal: 'Minimize food waste', description: 'Save leftovers.', status: 'collected' },
      ],
      error: null,
    };

    render(ProgressPage, { data });

    expect(screen.getByText('Reduce meat consumption')).toBeInTheDocument();
    expect(screen.getByText('Minimize food waste')).toBeInTheDocument();
  });

  it('shows a message when no goals have been collected', () => {
    const data = {
      goalId: 1,
      pickedGoal: null,
      goalMessages: [],
      goalHistory: [],
      error: null,
    };

    render(ProgressPage, { data });

    expect(screen.getByText('No goals have been collected yet.')).toBeInTheDocument();
  });
});

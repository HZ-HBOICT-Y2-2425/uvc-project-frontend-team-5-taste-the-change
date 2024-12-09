import { json } from '@sveltejs/kit';

// @ts-ignore
export async function POST({ request }) {
  try {
    // Parse the request body to get the goal ID
    const { id } = await request.json();

    // Example of how you could interact with your goals in memory or your database
    const response = await fetch('http://localhost:3013/pick-goal/' + id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    // If the request is successful, you could do additional processing or return data
    if (response.ok) {
      console.log('Goal picked:', result);
      return json({ message: 'Goal picked successfully!' });
    } else {
      console.log('Failed to pick goal:', result);
      return json({ message: 'Failed to pick goal' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error picking goal:', error);
    return json({ message: 'Error picking goal' }, { status: 500 });
  }
}

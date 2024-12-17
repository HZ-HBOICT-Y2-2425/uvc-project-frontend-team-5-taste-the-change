// @ts-nocheck
export async function load({ fetch }) {
  try {

    const response = await fetch('http://localhost:3013/random-goals'); // Your backend API URL for random goals
    const randomGoals = await response.json();
    
    // Return the fetched goals to the frontend
    return {
      data: {
        goals: randomGoals, // Sending the goals data to the frontend
      },
    };
  } catch (error) {
    console.error('Error fetching random goals:', error);
    return {
      data: { error: error.message }, // If there was an error, send the error message
    };
  }
}

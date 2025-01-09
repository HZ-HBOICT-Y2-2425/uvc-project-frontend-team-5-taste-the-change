export async function load() {
  try {
    const response = await fetch('http://localhost:3015/all-users');
        
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    const data = await response.json();

    return { data }; // Ensure returning the correct data structure
  } catch (error) {
    console.error('Error fetching users:', error); // Log any errors
    return {
      // @ts-ignore
      data: { error: error.message } // Return the error in the same structure
    };
  }
}
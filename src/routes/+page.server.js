export async function load() {
  try {
    const response = await fetch('http://localhost:3015/all-users/');

    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    const data = await response.json();
    console.log('Fetched userdata:', data); // Verify userdata here
    return { data };  // Return userdata directly
  } catch (error) {
    console.error('Error fetching users:', error);
    return {
      data: {error: error.message}  // Return an empty array in case of an error
    };
  }
}

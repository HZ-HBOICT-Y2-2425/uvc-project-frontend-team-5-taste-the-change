export async function load() {
  try {
    const response = await fetch('http://localhost:3015/all-users/');

    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    const userdata = await response.json();
    console.log('Fetched userdata:', userdata); // Verify userdata here
    return { userdata };  // Return userdata directly
  } catch (error) {
    console.error('Error fetching users:', error);
    return {
      userdata: {error: error.message}  // Return an empty array in case of an error
    };
  }
}

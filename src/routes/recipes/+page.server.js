console.log('Load function runs on server');

export async function load() {
  console.log('function is called')
  try {
    console.log('Fetching pets from API...');
    const response = await fetch('http://localhost:3012/recipes/');
        
    console.log('Response status:', response.status); // Log the status of the response
        
    if (!response.ok) {
      throw new Error('Failed to fetch recipes');
    }

    const data = await response.json();
    console.log('Fetched recipes:', data); // Log the fetched pets

    return {data: { recipes: data }} ; // Ensure returning the correct data structure
  } catch (error) {
    console.error('Error fetching recipes:', error); // Log any errors
    return {
      // @ts-ignore
      data: { error: error.message } // Return the error in the same structure
    };
  }
}
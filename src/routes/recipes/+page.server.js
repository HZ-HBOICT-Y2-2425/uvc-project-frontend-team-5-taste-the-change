export async function load() {
  try {
    const response = await fetch('http://localhost:3012/recipes/');
        
    if (!response.ok) {
      throw new Error('Failed to fetch recipes');
    }

    const data = await response.json();
    const recipes = data.recipes;

    return { data: { recipes } }; // Ensure returning the correct data structure
  } catch (error) {
    console.error('Error fetching recipes:', error); // Log any errors
    return {
      // @ts-ignore
      data: { error: error.message } // Return the error in the same structure
    };
  }
}

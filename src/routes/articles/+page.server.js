console.log('Load function runs on server');

export async function load() {
  console.log('function is called')
  try {
    console.log('Fetching articles from API...');
    const response = await fetch('http://localhost:3011/articles/');

    console.log('Response status:', response.status); // Log the status of the response

    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }

    const data = await response.json();
    const articles = data.articles;
    console.log('Fetched articles:', articles);

    return { data: { articles } }; // Ensure returning the correct data structure
  } catch (error) {
    console.error('Error fetching articles:', error); // Log any errors
    return {
      // @ts-ignore
      data: { error: error.message } // Return the error in the same structure
    };
  }
}
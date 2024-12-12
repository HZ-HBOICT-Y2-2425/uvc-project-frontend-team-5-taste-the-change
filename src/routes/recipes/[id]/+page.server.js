/**
 *  @param {{ params: { id: string } }} context 
*/
export async function load({ params }) {
  const { id } = params;
  const res = await fetch(`http://localhost:3012/recipes/${id}`);

  console.log('Fetch response status:', res.status);

  if (res.ok) {
    const recipe = await res.json();
    console.log('fetched recipe:', recipe)
    return { recipe };
  } else {
    return {
      status: 404,
      error: 'Recipe not found' // Return a plain string instead of an Error object
    };
  }  
}

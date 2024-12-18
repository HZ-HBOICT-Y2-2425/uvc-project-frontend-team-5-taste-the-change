/**
 *  @param {{ params: { id: string } }} context 
*/
export async function load({ params }) {
  const { id } = params;
  const res = await fetch(`http://localhost:3012/recipes/${id}`);

  if (res.ok) {
    const recipe = await res.json();
    return { recipe };
  } else {
    return {
      status: 404,
      error: 'Recipe not found' // Return a plain string instead of an Error object
    };
  }  
}

/**
 *  @param {{ params: { id: string } }} context 
 */
export async function load({ fetch, params }) {
  const { id } = params;

  try {
    // Fetch picked goal
    const pickedResponse = await fetch(`http://localhost:3013/goals/${id}/picked`);
    const pickedGoal = pickedResponse.ok ? await pickedResponse.json() : null;

    // Fetch goal messages
    const messagesResponse = await fetch(`http://localhost:3013/goals/${id}/messages`);
    const messages = messagesResponse.ok ? await messagesResponse.json() : { messages: [] };

    // Fetch goal history
    const historyResponse = await fetch(`http://localhost:3013/goals/history`);
    const history = historyResponse.ok ? await historyResponse.json() : [];

    return {
      goalId: id,
      pickedGoal,
      goalMessages: messages.messages || [],
      goalHistory: history,
    };
  } catch (error) {
    return {
      goalId: id,
      pickedGoal: null,
      goalMessages: [],
      goalHistory: [],
      error: error.message,
    };
  }
}

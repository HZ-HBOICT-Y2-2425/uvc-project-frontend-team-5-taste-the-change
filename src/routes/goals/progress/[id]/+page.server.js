/**
 *  @param {{ params: { id: string } }} context 
*/
export async function load({ fetch, params }) {
  const { id } = params;

  try {
    // Fetch goal messages
    const messagesResponse = await fetch(`http://localhost:3013/goals/${id}/messages`);
    const messages = messagesResponse.ok ? await messagesResponse.json() : { messages: [] };

    // Fetch goal history
    const historyResponse = await fetch(`http://localhost:3013/goals/history`);
    const history = historyResponse.ok ? await historyResponse.json() : [];

    return {
      goalId: id,
      goalMessages: messages.messages || [],
      goalHistory: history,
    };
  } catch (error) {
    return {
      goalId: id,
      goalMessages: [],
      goalHistory: [],
      error: error.message,
    };
  }
}

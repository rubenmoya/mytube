export const apiRequest = (endpoint, { actions = [], method = 'GET', params = {} }) => ({
  type: `API_REQUEST (${endpoint})`,
  endpoint,
  actions,
  method,
  params,
});

export default apiRequest;

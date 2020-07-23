const request = async (url = '', method = 'GET', payload = undefined) => {
  const API_URL = '/graphql';

  const options = {
    method,
    body: JSON.stringify(payload),
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    credentials: 'include'
  };

  try {
    const result = await fetch(`${API_URL}${url}`, options);
    // return result;
    return {
      statusCode: result.status,
      ok: result.ok,
      data: await result.json()
    };
  } catch (err) {
    console.error(`API call failed: ${err}`);
    return err;
  }
};

export const fetchy = {
  get: async url => await request(url),

  post: async (payload, url) => await request(url, 'POST', payload),

  put: async (payload, url) => await request(url, 'PUT', payload),

  delete: async url => await request(url, 'DELETE')
};

// This is explicitly for making GraphQL requests
export default async (query, variables) =>
  await fetchy.post({ query, variables });

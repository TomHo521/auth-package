import { getToken } from '../utils/auth';

const fetchData = async () => {
  const token = await getToken();
  const response = await fetch('https://your-api.com/endpoint', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export default fetchData;
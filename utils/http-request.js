import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const withCredentials = (url) => {
  return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
};

export async function http_request(continueUrl, headers) {
  try {
    const response = await axios.get(
      withCredentials(`https://api.github.com/${continueUrl}`),
      headers
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

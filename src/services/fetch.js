export const post = async (url, body) => {
  try {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const raw = body && JSON.stringify(body);
    const requestOptions = {
      method: 'POST',
      headers,
      body: raw,
      redirect: 'follow',
    };
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const get = async (url) => {
  try {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const requestOptions = {
      method: 'GET',
      headers,
      redirect: 'follow',
    };
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    return data;
  } catch (err) {
    return (err);
  }
};

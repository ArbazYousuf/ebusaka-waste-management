import axios from 'axios';
//export const API_URL = 'http://192.168.18.171:5000/api'; //dev hammad
export const API_URL = 'http://3.129.89.72:5000/api'; //prd
// export const API_URL = 'http://192.168.0.104:3055/'; //prd

// function processRequest(request) {
//   return request
//     .then((json) => {
//       if (!json.ok) throw json._bodyInit;
//       else return json();
//     })
//     .catch((error) => {
//       throw error;
//     });
// }

export function get(path, token) {
  const API_REQ_URL = API_URL + path;
  const config = {
    headers: {Authorization: `Bearer ${token}`},
  };
  console.log('BOOM', API_REQ_URL, config);
  let request;
  request = axios.get(API_REQ_URL, config);
  return request;
}

export function post(path, obj, token) {
  const API_REQ_URL = API_URL + path;
  console.log(
    'post==>',
    API_REQ_URL,
    token ? 'token get' : 'token not get',
    obj,
  );
  const config = {
    headers: {Authorization: `Bearer ${token}`},
  };
  let request;
  request = axios.post(API_REQ_URL, obj, config);
  console.log('request', request);
  return request;
}

export function put(path, obj, id, token) {
  const API_REQ_URL = `${API_URL}${path}/${id}`;
  console.log('put==>', API_REQ_URL, obj);
  const config = {
    headers: {Authorization: `Bearer ${token}`},
  };
  let request;
  try {
    request = axios.put(API_REQ_URL, obj, config);
  } catch (error) {
    throw error;
  }
  return request;
}

export function del(path, id, token) {
  const API_REQ_URL = `${API_URL}${path}/${id}`;
  console.log('del==>', API_REQ_URL, {token});
  const config = {
    headers: {Authorization: `Bearer ${token}`},
  };
  let request;
  try {
    request = axios.delete(API_REQ_URL, config);
  } catch (error) {
    throw error;
  }
  return request;
}

export function login(path, obj) {
  const API_REQ_URL = API_URL + path;
  console.warn(API_REQ_URL, '---', {obj});
  let request;
  request = axios.post(API_REQ_URL, obj);
  return request;
}

export function verifyMe(path, token) {
  const API_REQ_URL = API_URL + path;
  console.warn(API_REQ_URL, '---', {path}, token);
  const config = {
    headers: {Authorization: `Bearer ${token}`},
  };

  let request;
  try {
    request = axios.put(API_REQ_URL, {}, config);
  } catch (error) {
    throw error;
  }
  return request;
}

export function reg(path, obj) {
  const API_REQ_URL = API_URL + path;
  console.log(API_REQ_URL, obj);
  let request;
  try {
    request = axios.post(API_REQ_URL, obj);
  } catch (error) {
    throw error;
  }
  console.log(request);
  return request;
}

import axios from 'axios';
export const API_URL = 'http://182.239.49.84:3055/'; //dev
// export const API_URL = 'http://72.255.61.236:3055/'; //prd
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
    headers: {'auth-token': `${token}`},
  };
  console.log('BOOM', API_REQ_URL, config);
  let request;
  request = axios.get(API_REQ_URL, config);
  return request;
}

export function post(path, obj, token) {
  const API_REQ_URL = API_URL + path;
  console.log('post==>', API_REQ_URL, token, obj);
  const config = {
    headers: {'auth-token': `${token}`},
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
    headers: {'auth-token': `${token}`},
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
    headers: {'auth-token': `${token}`},
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
  console.log(API_REQ_URL, '---', {obj});
  let request;
  request = axios.post(API_REQ_URL, obj);
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

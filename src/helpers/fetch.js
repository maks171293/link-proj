export const post = async ({ url, body, token, success, failure, dispatch }) => {
  const formBody = Object.keys(body).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(body[key])).join('&');  
  console.log('formBody', formBody)
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': token
      },
      body: formBody,
    })
    const data = await res.json()
    dispatch({ type: success, data })
  } catch (e) {
    dispatch({ type: failure })
  }
}

export const postNA = async ({ url, body, success, failure, dispatch }) => {
  const formBody = Object.keys(body).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(body[key])).join('&');
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody,
    })
    const data = await res.json()
    dispatch({ type: success, data })
  } catch (e) {
    dispatch({ type: failure })
  }
}

export const get = async ({url, success, failure, dispatch}) => {
  try{
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
    })
    const data = await res.json()
    dispatch({type: success, data})
  }catch(e){
    dispatch({type: failure})
  }
}
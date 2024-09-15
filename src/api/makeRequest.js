const request = {
  get: async (url) => {
    let result = await fetch(`${url}`, {
      method: 'GET',
      // headers: {
      //   Authorization: `Bearer ${authorization}`,
      // },
    }).catch((e) => {
      console.log(e)
    })
    // console.log(`get ${url}`);
    if (result.ok) {
      return result.json()
    } else {
      return {
        status: false,
        data: {},
        message: 'connect server failed',
      }
    }
  },
  getStyle: async (url) => {
    let result = await fetch(`${url}`, {
      method: 'GET',
      // headers: {
      //   Authorization: `Bearer ${authorization}`,
      // },
    }).catch((e) => {
      console.log(e)
    })
    // console.log(result);
    if (result) {
      return result.json()
    } else {
      return {
        status: false,
        data: {},
        message: 'connect server failed',
      }
    }
  },
  post: async (url, data) => {
    // console.log(url, data);
    let result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      // redirect: 'follow',
    }).catch((e) => {
      console.log(e)
    })
    // console.log('post', url, result);
    if (result.ok) {
      return result.json()
    } else {
      return {
        status: false,
        data: {},
        message: 'connect server failed',
      }
    }
  },
  postFormData: async (url, data) => {
    let result = await fetch(url, {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      body: data,
      // redirect: 'follow',
    }).catch((e) => {
      console.log(e)
    })
    // console.log('post', result);
    // console.log('data', data);

    if (result.ok) {
      return result.json()
    } else {
      return {
        status: false,
        data: {},
        message: 'connect server failed',
      }
    }
  },

  put: async (url, data) => {
    let result = await fetch(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // token: token,
      },
      body: JSON.stringify(data),
    }).catch((e) => {
      console.log(e)
    })
    // console.log('adasd', url);
    if (result.ok) {
      return result.json()
    } else {
      return {
        status: false,
        data: {},
        message: 'connect server failed',
      }
    }
  },
  postAuthorization: async (url, data, authorization) => {
    let result = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authorization}`,
      },
      body: JSON.stringify(data),
    }).catch((e) => {
      console.log(e)
    })
    // console.log('postAuthorization data', JSON.stringify(data));
    // console.log('postAuthorization result', result);

    if (result.ok) {
      return result.json()
    } else {
      return result.json()
    }
  },
  putAuthorization: async (url, data, authorization) => {
    let result = await fetch(url, {
      method: 'PUT',
      headers: {
        // Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authorization}`,
      },
      body: JSON.stringify(data),
    }).catch((e) => {
      console.log(e)
    })
    // console.log('putAuthorization', result);
    if (result.ok) {
      return result.json()
    } else {
      return {
        status: false,
        data: {},
        message: 'connect server failed',
      }
    }
  },
  putAuthorizationParams: async (url, data, authorization, params) => {
    let result = await fetch(`${url}?${params}`, {
      method: 'PUT',
      headers: {
        // Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authorization}`,
      },
      body: JSON.stringify(data),
    }).catch((e) => {
      console.log(e)
    })
    // console.log(result);
    if (result.ok) {
      return result.json()
    } else {
      return {
        status: false,
        data: {},
        message: 'connect server failed',
      }
    }
  },
  getAuthorization: async (url, authorization) => {
    let result = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    }).catch((e) => {
      console.log(e)
    })
    // console.log(result);
    if (result.ok) {
      return result.json()
    } else {
      return {
        status: false,
        data: {},
        message: 'connect server failed',
      }
    }
  },
  getAuthorizationParams: async (url, authorization, params) => {
    let result = await fetch(`${url}?${params}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    }).catch((e) => {
      console.log(e)
    })
    // console.log('getAuthorizationParams ', result);
    if (result) {
      if (result.ok) {
        return result.json()
      } else {
        return {
          status: false,
          data: {},
          message: 'connect server failed',
        }
      }
    } else {
      console.log('getAuthorizationParams ', url)
    }
  },
  getParams: async (url, params) => {
    let result = await fetch(`${url}?${params}`, {
      method: 'GET',
      // headers: {
      //   Authorization: `Bearer ${authorization}`,
      // },
    }).catch((e) => {
      console.log(e)
    })
    // console.log('getParams', result);
    if (result.ok) {
      return result.json()
    } else {
      return {
        status: false,
        data: {},
        message: 'connect server failed',
      }
    }
  },
  getParamsGSV: async (url, params) => {
    let result = await fetch(`${url}?${params}`, {
      method: 'GET',
      // headers: {
      //   Authorization: `Bearer ${authorization}`,
      // },
    }).catch((e) => {
      console.log(e)
    })
    // console.log('getParams', result, `${url}?${params}`);
    if (result.ok) {
      return result.text()
    } else {
      return {
        status: false,
        data: {},
        message: 'connect server failed',
      }
    }
  },
  postUploadProfilePicture: async (url, myHeaders, data) => {
    let result = await fetch(url, {
      method: 'POST',
      headers: myHeaders,
      body: data,
      redirect: 'follow',
    }).catch((e) => {
      console.log(e)
    })
    console.log('postUploadProfilePicture', result)
    if (result.ok) {
      return result.json()
    } else {
      return {
        status: false,
        data: {},
        message: 'connect server failed',
      }
    }
  },
  postAddAttachment: async (url, myHeaders, data) => {
    let result = await fetch(url, {
      method: 'POST',
      headers: myHeaders,
      body: data,
      redirect: 'follow',
    }).catch((e) => {
      console.log(e)
    })
    console.log('postAddAttachment', result)
    if (result.ok) {
      return result.json()
    } else {
      return {
        status: false,
        data: {},
        message: 'connect server failed',
      }
    }
  },
  deleteAuthorizationParams: async (url, authorization, params) => {
    let result = await fetch(`${url}?${params}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    }).catch((e) => {
      console.log(e)
    })
    // console.log('deleteAuthorizationParams ', result);
    if (result.ok) {
      return result.json()
    } else {
      return {
        status: false,
        data: {},
        message: 'connect server failed',
      }
    }
  },
  postGSV: async (url, params, data, header) => {
    // console.log(url, data);
    let result = await fetch(`${url}?${params}`, {
      method: 'POST',
      headers: {
        'X-eKMap-REST-API': header,
      },
      body: data,
      // redirect: 'follow',
    }).catch((e) => {
      console.log(e)
    })
    console.log('post', url, result)
    if (result.ok) {
      return result.json()
    } else {
      return {
        status: false,
        data: {},
        message: 'connect server failed',
      }
    }
  },
  postGserver: async (url, myHeaders, data) => {
    let result = await fetch(url, {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(data),
    }).catch((e) => {
      console.log(e)
    })
    // console.log('postGserver url', url);
    // console.log('postGserver myHeaders', myHeaders);
    // console.log('postGserver data', data);
    // console.log('postGserver result', result);

    if (result.ok) {
      return result.json()
    } else {
      return {
        status: false,
        data: {},
        message: 'connect server failed',
      }
    }
  },
  postAttachmentsGserver: async (url, myHeaders, data) => {
    let result = await fetch(url, {
      method: 'POST',
      headers: myHeaders,
      body: data,
    }).catch((e) => {
      console.log(e)
    })
    console.log('postAttachmentsGserver', url, myHeaders, data, result)
    if (result.ok) {
      return result.text()
    } else {
      return {
        status: false,
        data: {},
        message: 'connect server failed',
      }
    }
  },
}

export default request

const url = import.meta.env.VITE_EXPRESS_URL

const toUrlEncoded = (formData) => {
  const data = new URLSearchParams();
    for (const key in formData) {
      data.append(key, formData[key])
    }
    return data
}

const toFormData = (formData) => {
  const data = new FormData();
  for (const key in formData){
    if(key === thumbnail || key==='') continue;
    data.append(key, formData[key])
  }
  data.append('thumbnail',formData.thumbnail[0])
  return data
}

const cookieLogin = async(cookie) =>{
    const usercookie = document.cookie
        if(usercookie.includes('token=')){
          const res = await fetch(`${url}/user/loguser`,{ method:"POST" ,credentials:'include' })
          const userData = await res.json()
          return userData
        }
}

const apiLogin = async (formData) => {
    const data = toUrlEncoded(formData)

    const res = await fetch(`${url}/user/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data,
      credentials: 'include',
    })

    const userData = await res.json()

    return userData

}

const apiSignin = async (formData) => {
    const data = toUrlEncoded(formData)

    const res = await fetch(`${url}/user/signin`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data,
      credentials: 'include',
    })
    const userData = await res.json()
    return userData
}


const postBlog = async(formData) => {
  const data = toFormData(formData)
  const res = await fetch(`${url}/blog/addblog`, {
    method:'POST',
    credentials:'include',
    body:data
  })
  const blog = await res.json();
  return blog;
}

export { cookieLogin, apiLogin, apiSignin, postBlog }
const axios = require('axios');
export const getUserInfo = async() =>{
    try{
      const res = await axios.get(`${process.env.REACT_APP_BE_URL}/users/me`,{
        withCredentials:true
      })
      const data = await res.data
      // console.log(data)
      return data
    }catch(err){console.log(err)}
  }
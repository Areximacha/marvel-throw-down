import axios from 'axios'

const baseURL = 'https://gateway.marvel.com/v1/public/characters'
const publicKey = 'b8d4741af60175b02b0219f10300fdf4'

const requestTotal = () => {
  const param = `?limit=1&apikey=${publicKey}`

  return axios.get(baseURL + param)
}

const requestCharacter = (offset) => {
  const param = `?limit=1&offset=${offset}&apikey=${publicKey}`

  return axios.get(baseURL + param)
}

const generateOffset = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default {
  getCharacter () {
    return requestTotal()
      .then(response => {
        let total = response.data.data.total
        
        return axios.all([
          requestCharacter(generateOffset(1, total)),
          requestCharacter(generateOffset(1, total))
        ])
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        return error
      })
  },
}

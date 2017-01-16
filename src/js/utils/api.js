import axios from 'axios'

const baseURL = 'https://gateway.marvel.com/v1/public/characters'
const publicKey = 'b8d4741af60175b02b0219f10300fdf4'
const param = '?name=hulk&apikey=' + publicKey

const testRequest = () => {
  return axios.get(baseURL + param)
}

export default {
  getCharacter () {
    return testRequest()
      .then(response => {
        return response
      })
      .catch(error => {
        return error
      })
  }
}

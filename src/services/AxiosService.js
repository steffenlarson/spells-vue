import Axios from 'axios'

export const sandboxapi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/'
})
export const dndapi = Axios.create({
  baseURL: 'https://www.dnd5eapi.co/api'
})
export const setBearer = function(bearer) {
  sandboxapi.defaults.headers.authorization = bearer
}

export const resetBearer = function() {
  sandboxapi.defaults.headers.authorization = ''
}

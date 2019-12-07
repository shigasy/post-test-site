export default function({ $axios, redirect }) {
  // $axios.setToken('access_token')
  $axios.setHeader('Access-Control-Allow-Credentials', true)
  $axios.setHeader('withCredentials', true)
  $axios.setHeader('Access-Control-Allow-Origin', '*')
  $axios.onRequest((config) => {
    // $axios.setHeader('Access-Control-Allow-Origin', '*')
    // $axios.setHeader('Access-Control-Allow-Credentials', true)
  })
  $axios.onResponse((config) => {
    // $axios.setHeader('Access-Control-Allow-Origin', '*')
    // $axios.setHeader('Access-Control-Allow-Credentials', true)
  })
}

import axios from 'axios'
const baseURL = 'https://powerful-bayou-56783.herokuapp.com/'

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL,
      withCredentials: true
    })
  }


  signup = form => {
    return this.service
      .post('auth/signup', form)
      .then(({ data }) => data)
      .catch(err => err)
      
  }

  login = form => {
    return this.service
      .post('auth/login', form)
      .then(response => {
        console.log(response, 'wtf')
        return response
      })
      .catch(err => {
        return { err: 'Password incorrect' }
      })
  }
  logout = () => {
    return this.service
      .get('/auth/logout')
      .then(response => response)
      .catch(err => ({ err: 'Something went wrong. '}))
  }

  loggedin = () => {
    return this.service
      .get('auth/loggedin')
      .then(response => response)
      .catch(err => err)
  }
}
  

export default AuthService

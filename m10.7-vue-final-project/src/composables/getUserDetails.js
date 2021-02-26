import { ref } from 'vue'

const getUserDetails = (id) => {
  const user = ref(null)    
  const error = ref(null)

  const loadUserDetails = async () => {
    try {
      let userData = await fetch('http://jsonplaceholder.typicode.com/users/' + id)
      if (!userData) {
        throw Error('No user data available')
      }
      user.value = await userData.json()
    }
    catch (err) {
      error.value = err.message
    }
  }
  return { user, error, loadUserDetails}
}

export default getUserDetails
import { ref } from 'vue'

const getUsers = () => {
  const users = ref([])    
  const error = ref(null)

  const loadUsers = async () => {
    try {
      let usersData = await fetch('http://jsonplaceholder.typicode.com/users')
      if (!usersData) {
        throw Error('No users data available')
      }
      users.value = await usersData.json()
    }
    catch (err) {
      error.value = err.message
    }
  }
  return { users, error, loadUsers}
}

export default getUsers
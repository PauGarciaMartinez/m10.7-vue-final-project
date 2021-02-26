export default {
  name: 'UserDetails',
  props: ['id'],
  setup() {
    const users = ref([])    
    const error = ref(null)

    const getUsers = async () => {
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
    getUsers()

    return { users, error }
  }
}
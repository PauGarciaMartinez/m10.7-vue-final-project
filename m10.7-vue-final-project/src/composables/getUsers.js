import { ref } from 'vue'

const getUsers = () => {
  const users = ref([])    
  const matchingUsers = ref([])
  const error = ref(null)
  const search = ref()

  console.log()


  const loadUsers = async () => {
    try {
      let usersData = await fetch('http://jsonplaceholder.typicode.com/users')
      if (!usersData) {
        throw Error('No users data available')
      }
      users.value = await usersData.json()
      // To filter from the search bar 
/*       console.log(users.value)
      matchingUsers.value = users.value.filter(user => user.name.includes(inputSearch)) */
    }
    catch (err) {
      error.value = err.message
    }
  }
  return { users, error, loadUsers}
}

export default getUsers
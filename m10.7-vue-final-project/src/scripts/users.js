import { ref } from 'vue'
import getUsers from './../composables/getUsers.js'

export default {
  name: 'Users', 
  setup() {
    const { users, error, loadUsers} = getUsers()

    loadUsers()

    return { users, error }
  }
}
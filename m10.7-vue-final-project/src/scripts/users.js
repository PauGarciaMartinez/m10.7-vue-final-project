import { watch, watchEffect } from 'vue'
import { ref } from 'vue'
import getUsers from './../composables/getUsers.js'

export default {
  name: 'Users', 
  props: ['inputSearch'],
  setup(props) {
    const { users, error, loadUsers} = getUsers()

    loadUsers()

    return { users, error }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    caps(name) {
      return name.toUpperCase()
    },
    addCounter(username) {
      this.$emit('addCounter', username)
    },

  }
}
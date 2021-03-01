import { watch, watchEffect } from 'vue'
import { ref } from 'vue'
import getUsers from './../composables/getUsers.js'

export default {
  name: 'Users', 
  props: ['inputSearch'],
  emits: ['addUserConsulted', 'addAlbumConsulted'],
  setup() {
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
    addUserConsulted(user) {
      this.$emit('add-user-consulted', user)
    }
  }
}
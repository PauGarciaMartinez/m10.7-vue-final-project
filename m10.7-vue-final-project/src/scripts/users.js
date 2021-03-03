import { computed, watch, watchEffect } from 'vue'
import { ref } from 'vue'
import getUsers from './../composables/getUsers.js'

export default {
  name: 'Users', 
  props: ['inputSearch'],
  emits: ['addUserConsulted', 'addAlbumConsulted'],
  setup(props) {
    const { users, error, loadUsers} = getUsers()

    loadUsers()

    const matchingUsers = computed(() => {
      if (props.inputSearch) {
        return users.value.filter(user => user.name.toLowerCase().includes(props.inputSearch.toLowerCase()))
      } else {
        return users.value
      }
    })

    return { users, error, matchingUsers }
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
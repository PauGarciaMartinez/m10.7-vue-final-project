import getUsers from './../composables/getUsers.js'
import { computed } from 'vue'

export default {
  name: 'Autocomplete',
  props: ['inputSearch', 'resultsList'],
  setup(props) {
    const { users, error, loadUsers} = getUsers()

    loadUsers()
    
    const matchingUsers = computed(() => {
      if (props.inputSearch) {
        return users.value.filter(user => user.name.toLowerCase().startsWith(props.inputSearch.toLowerCase()))
      }
    })
    
    return { users, error, matchingUsers }
  },
  methods: {
    setInput(username) {
      this.$emit('set-input', username)
    }
  }
}
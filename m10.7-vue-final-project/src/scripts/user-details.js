import getUserDetails from './../composables/getUserDetails.js'

export default {
  name: 'UserDetails',
  props: ['id'],
  setup(props) {
    const { user, error, loadUserDetails} = getUserDetails(props.id) 

    loadUserDetails()

    return { user, error }
  }
}
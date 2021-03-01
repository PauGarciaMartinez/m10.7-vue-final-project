export default {
  name: 'App',
  data() {
    return {
      input: "",
      usersConsulted: [],
      albumsConsulted: []
    }
  },
  methods: {
    userUp(username) {
      let check = this.usersConsulted.findIndex(item => item.username === username)
      if (check === -1) {
        username.count = 1
        this.usersConsulted.push(username)
      } else {
        let userClicked = this.usersConsulted.find(item => item.id === username.id)
        userClicked.count++
      }
    },
    albumUp(album) {
      this.albumsConsulted.push(album)
    }
  }
}
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
    userUp(user) {
      let consulted = this.usersConsulted.findIndex(item => item.name === user.name)
      if (consulted === -1) {
        user.clicks = 1
        this.usersConsulted.push(user)
        console.log(this.usersConsulted)
      } else {
        let userClicked = this.usersConsulted.find(item => item.name === user.name)
        userClicked.clicks++
      }
    },
    albumUp(album) {
      this.albumsConsulted.push(album)
    }
  }
}
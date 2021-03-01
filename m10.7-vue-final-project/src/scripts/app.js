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
      let consulted = this.usersConsulted.indexOf(user.name)
      if (consulted === -1) {
        user.clicks = 1
        this.usersConsulted.push(user.name, user.clicks)
      } else {
        user.clicks++
      }
    },
    albumUp(album) {
      this.albumsConsulted.push(album)
    },
    conole() {
      console.log(usersConsulted)
    }
  }
}
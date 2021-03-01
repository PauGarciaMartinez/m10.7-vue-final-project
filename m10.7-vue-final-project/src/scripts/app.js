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
      this.usersConsulted.push(username)
    },
    albumUp(album) {
      this.albumsConsulted.push(album)
    }
  }
}
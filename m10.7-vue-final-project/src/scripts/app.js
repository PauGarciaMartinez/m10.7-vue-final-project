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
      } else {
        let userClicked = this.usersConsulted.find(item => item.name === user.name)
        userClicked.clicks++
      }
    },
    albumUp(album) {
      let consulted = this.albumsConsulted.findIndex(item => item.albumId === album.albumId)
      if (consulted === -1) {
        album.clicks = 1
        this.albumsConsulted.push(album)
      } else {
        let albumClicked = this.albumsConsulted.find(item => item.albumId === album.albumId)
        albumClicked.clicks++
      }
    }
  }
}
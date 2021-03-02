export default {
  name: 'Home',
  emits: ['addUserConsulted', 'addAlbumConsulted'],
  props: ['usersConsulted', 'albumsConsulted'],
  data() {
    return {
      usersVisited: [] 
    }
  }
}
import { ref } from 'vue'
import getAlbums from './../composables/getAlbums.js'

export default {
  name: 'Pictures', 
  setup() {
    const { albums, error, loadAlbums} = getAlbums()

    loadAlbums()

    return { albums, error }
  }
}
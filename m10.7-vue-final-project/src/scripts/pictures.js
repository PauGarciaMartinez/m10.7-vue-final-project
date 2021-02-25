import { ref } from 'vue'

export default {
  name: 'Pictures', 
  setup() {
    const albums = ref([])    
    const error = ref(null)

    const getAlbums = async () => {
      try {
        let albumsData = await fetch('http://jsonplaceholder.typicode.com/photos')
        if (!albumsData) {
          throw Error('No users data available')
        }
        albums.value = await albumsData.json()
      }
      catch (err) {
        error.value = err.message
      }
    }
    getAlbums()

    return { albums, error }
  }
}
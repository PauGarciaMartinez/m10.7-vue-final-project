import { ref } from 'vue'

const getAlbums = () => {
  const albums = ref([])    
  const error = ref(null)

  const loadAlbums = async () => {
    try {
      let albumsData = await fetch('http://jsonplaceholder.typicode.com/photos')
      if (!albumsData) {
        throw Error('No album data available')
      }
      albums.value = await albumsData.json()
    }
    catch (err) {
      error.value = err.message
    }
  }
  return { albums, error, loadAlbums}
}

export default getAlbums